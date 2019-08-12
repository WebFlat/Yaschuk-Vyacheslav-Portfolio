$(document).ready(function() {
   
    
//Animate Skills*********************************************
    var shape = document.getElementById('progress');
	var percentNumber = document.querySelector('.percentHtml');
	let drowSkills = () => {
    var shapeLength = (shape.getTotalLength().toFixed(0))-(shape.getTotalLength().toFixed(0))*(percentNumber.getAttribute('number'))/100;
    var progressShow = shape.setAttribute('stroke-dashoffset', shapeLength);
    	percentNumber.innerText = percentNumber.getAttribute('number') + '%';
	};
	drowSkills();


	var shape = document.getElementById('progress_2');
	var percentNumber = document.querySelector('.percentCss');
	drowSkills();

	var shape = document.getElementById('progress_3');
	var percentNumber = document.querySelector('.percentJS');
	drowSkills();

	var shape = document.getElementById('progress_4');
	var percentNumber = document.querySelector('.percentGulp');
	drowSkills();

	var shape = document.getElementById('progress_5');
	var percentNumber = document.querySelector('.percentBootstrap');
	drowSkills();

	var shape = document.getElementById('progress_6');
	var percentNumber = document.querySelector('.percentAdaptive');
	drowSkills();

//Slider************************************************************ 
 $('.owl-carousel').owlCarousel({
    center: true,
    loop:true,
    margin: 30,
	nav: true,
    autoHeight: true,
    // autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
           items:1,
            center: false 
        },
        1024:{
            items:3
        }
    }
});

});