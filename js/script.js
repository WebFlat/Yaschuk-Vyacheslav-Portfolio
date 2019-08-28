$(document).ready(function() {


//Show-hide burger-submenu**********************************
	
	$('#burger-check').on('click', function(e) {
		e.preventDefault;
		$('#burger-submenu').toggleClass('navbar__burger-submenu--active');
		let changeBurger = () => {		
		if ($('#burger-submenu').hasClass('navbar__burger-submenu--active')) {
			$(this).attr("src", "../img/times.png");
		} else {
			$(this).attr("src", "../img/burger.png");
		};
	};
	changeBurger();
	});


//Hide menu on click link************************************	
	$('.navbar__link').on('click', function(e) {
		e.preventDefault;
		if ($('#burger-submenu').hasClass('navbar__burger-submenu--active')) {
			$('#burger-submenu').removeClass('navbar__burger-submenu--active');
			$('#burger-check').attr("src", "../img/burger.png");
		}
	});


	
//Animate Skills*********************************************

	let startAnimateSkills = () => {
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

	};

//Отслеживание перемещения********************************************
	$(window).scroll(function(){
		//skills
		if ($(this).scrollTop() > 1000){
			startAnimateSkills();
		}
		//navbar
		if ($(this).scrollTop() > 50 && $(this).scrollTop() < 1400) {
			$(navbar).css("transform", "translateY(-100px)");
		}
		else {
			$(navbar).css("transform", "translateY(0)");
		};
	});
		




//Slider************************************************************ 
 $('.owl-carousel').owlCarousel({
    center: true,
    loop:true,
    margin: 30,
	nav: true,
    autoHeight: true,
    autoplay: true,
    responsiveClass:true,
    responsive:{
		0:{
			items: 1,
		},
        768:{
           items: 2,
        	center: false 
        },
        1024:{
            items:3
        }
    }
});




});