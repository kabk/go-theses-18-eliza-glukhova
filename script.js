$(document).ready(function(){
  $(document).scrollTo('.slide1', 800, {queue: true, axis:'yx'});
	$(".button").insertAfter("head");

  $(document).on("click", "#second", function(evt) {
  	animateGoTo("slide2");
  });
  $(document).on("click", "#third", function(evt) {
  	animateGoTo("slide3");
  });
  $(document).on("click", "#fourth", function(evt) {
  	animateGoTo("slide4");
  });
  $(document).on("click", "#fifth", function(evt) {
  	animateGoTo("slide5");
  });
  $(document).on("click", "#sixth", function(evt) {
  	animateGoTo("slide6");
  });
  $(document).on("click", "#seventh", function(evt) {
  	animateGoTo("slide7");
  });
  $(document).on("click", "#ninth", function(evt) {
  	animateGoTo("slide8");
  });
  $(document).on("click", "#eleventh", function(evt) {
  	animateGoTo("slide9");
  });
  $(document).on("click", "#twelfth", function(evt) {
  	animateGoTo("slide10");
  });
  $(document).on("click", "#tenth", function(evt) {
  	animateGoTo("slide11");
  });

  function animateGoTo(slide){
  	$("."+slide).zoomTo({
  		targetsize:0.1,
  		duration:600,
  		animationendcallback: function(){
  			$("."+slide).zoomTo({targetsize:0.9, duration:600});
  		}
  	});
  }
/*
 function animateGoTo(slide){

  	$("body").animate(
  		{zoom:0.3},
  		{
  			duration: 3000,
  			progress: function(e, progress){
  				console.log(progress);
  				var left = $(document).scrollLeft()*(1-progress/2);
  				var top = $(document).scrollTop()*(1-progress/2);
  				$(document).scrollTo({left:left, top:top}, 1);
  			},
  			complete: function(){
  				position = {left:$("."+slide).offset().left*0.3, top:$("."+slide).offset().top*0.3};
  				position = "."+slide;
  				$(document).scrollTo(position, 2800,
  				{
  					axis:'yx',
  					onAfter: function(){
  						//$("body").animate({zoom:1}, 1000);
  					},
  					progress: function(e, progress){
  						var zoom = 0;
  						zoom = 0.3+0.7*progress;
  						$("body").css({zoom:zoom});
  					}
  				  }
  				);
  			}
  		}
  	);
  }
$('#first').click(function (){
  animateGoTo("slide1");
});
$('#second').click(function (){
    animateGoTo("slide2");
});
  $('#third').click(function (){
        $(document).scrollTo('.slide3', 1600, {queue: true, axis:'yx'});

    });
  $('#fifth').click(function (){
      $(document).scrollTo('.slide5', 1600, {queue: true, axis:'yx'});

  });
  $('#sixth').click(function (){
      $(document).scrollTo('.slide6', 1600, {queue: true, axis:'yx'});

  });
  $('#seventh').click(function (){
      $(document).scrollTo('.slide7', 1600, {queue: true, axis:'yx'});
      console.log("hi");
  });
  $('#fourth').click(function (){
      $(document).scrollTo('.slide8', 1600, {queue: true, axis:'yx'});
      console.log("hi");
  });
  $('#eightth').click(function (){
      $(document).scrollTo('.slide1', 1600, {queue: true, axis:'yx'});
      console.log("hi");
  });*/

});
