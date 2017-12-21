function inWindow(s){
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var currentEls = $(s);
  var result = [];
  currentEls.each(function(){
    var el = $(this);
    var offset = el.offset();
    if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
      result.push(this);
  });
  return $(result);
}



$(document).ready(function() {
  $('.refeerence').popover();

  $(document).click(function(event){
    if( $(event.target).hasClass("refeerence") || $(event.target).hasClass("popover-body")) return;
    $('.refeerence').popover('hide');
  });
  $(document).scrollTo({left:"73%", top:0});

  $('#arrow1').click(function (){
    $(document).scrollTo('#one', 1200, {queue: true, axis:'yx'});
  });

  /*$(document).on("scroll", function() {
    setTimeout(function(){
    $(".content-block").addClass("none");
      inWindow(".content-block").removeClass("none");
    }, 300);
  });*/
});
$('#arrow1').hover(function(){
  $(this).attr("fill", "red");

}, function(){
$(this).attr("fill", "black");
});

var shiftX = 200;
var shiftY = 100;
var shapes = [
	{
		"segments": [[shiftX, shiftY], [shiftX+100, shiftY], [shiftX+100, shiftY+30], [shiftX+40, shiftY+30],
	  [shiftX+40, shiftY+60],[shiftX+100, shiftY+60], [shiftX+100, shiftY+90],
	  [shiftX+40, shiftY+90], [shiftX+40, shiftY+160], [shiftX,shiftY+160]],
		"left":null,
		"right":null,
		"transformLeft":null,
		"transformRight":null
  }
];

var path = new Path({
  segments: shapes[0].segments,
  fillColor: 'black'
});
var transformBack = false;
var duration = 2;
var transformBackStart = null;
for (var i=0; i<shapes[0].segments.length; i++){
	if(shapes[0].segments[i][0] < shapes[0].left || shapes[0].left===null){
		shapes[0].left = shapes[0].segments[i][0];
	}
	if(shapes[0].segments[i][0] > shapes[0].right){
		shapes[0].right = shapes[0].segments[i][0];
	}
}
//console.log( "hi", shapes[0].left, shapes[0].right);

function onResize() {

}

function onMouseMove(e) {

  //path.smooth();
  var mouseX = e.event.offsetX;
  var basePointY = shiftY+160;
  var basePointX = shiftX;
  var direction = null;
	shapes[0].transformRight = null;
	shapes[0].transformLeft = null;
	if (mouseX < basePointX-200 || mouseX > basePointX+200){
		transformBack = true;

	}else{
    for (var i=0; i<shapes[0].segments.length; i++){
      var pointX = shapes[0].segments[i][0];
      var pointY = shapes[0].segments[i][1];

      var cathMouseY = basePointY+500;
      var cathMouseX = pointX - mouseX;
      var cathCoef = cathMouseY/cathMouseX;

      var cathY = basePointY - pointY;//160
      var cathX = cathY/cathCoef;

      path.segments[i].point.x = pointX - cathX;
			if(path.segments[i].point.x>shapes[0].transformRight || shapes[0].transformRight===null){
				shapes[0].transformRight = path.segments[i].point.x;
			}
			if(path.segments[i].point.x<shapes[0].transformLeft || shapes[0].transformLeft === null){
				shapes[0].transformLeft = path.segments[i].point.x;
			}
    }
	}
	//console.log(shapes[0].transformLeft, shapes[0].transformRight);
}

function onFrame(event) {
	if(transformBack){
		if(transformBackStart === null){
			transformBackStart = event.time;
			shiftSize = shapes[0].transformRight - shapes[0].right;
			if(shiftSize < shapes[0].left - shapes[0].transformLeft){
				shiftSize = shapes[0].left - shapes[0].transformLeft;
			}
		}
		k = 1-(event.time - transformBackStart)/duration;
		for (var i=0; i<shapes[0].segments.length; i++){
			path.segments[i].point.x = shapes[0].segments[i][0]+k*shiftSize;
		}
	}
}
