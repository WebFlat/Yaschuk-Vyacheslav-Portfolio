'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(document).ready(function () {
    "use strict";

    //Show-hide burger-submenu**********************************

    $('#burger-check').on('click', function (e) {
        var _this = this;

        e.preventDefault;
        $('#burger-submenu').toggleClass('navbar__burger-submenu--active');
        var changeBurger = function changeBurger() {
            if ($('#burger-submenu').hasClass('navbar__burger-submenu--active')) {
                $(_this).attr("src", "./img/times.png");
            } else {
                $(_this).attr("src", "./img/burger.png");
            };
        };
        changeBurger();
    });

    //Hide menu on click link************************************	
    $('.navbar__link').on('click', function (e) {
        e.preventDefault;
        if ($('#burger-submenu').hasClass('navbar__burger-submenu--active')) {
            $('#burger-submenu').removeClass('navbar__burger-submenu--active');
            $('#burger-check').attr("src", "./img/burger.png");
        }
    });

    //Change lang************************************************
    var opt = document.getElementById('lang');

    var changeLang = function changeLang() {
        var imageLang = document.getElementById('changeImg');
        if (opt.value === 'ru') {
            window.location = '../index_ru.html';
            imageLang.src = '../img/ru.svg';
            console.log("ru");
        } else if (opt.value === 'en') {
            window.location = '../index.html';
            imageLang.src = "../img/en.svg";
            console.log("en");
        }
    };
    opt.addEventListener('change', changeLang);

    //Animate Skills*********************************************

    var startAnimateSkills = function startAnimateSkills() {
        var shape = document.getElementById('progress');
        var percentNumber = document.querySelector('.percentHtml');
        var drowSkills = function drowSkills() {
            var shapeLength = shape.getTotalLength().toFixed(0) - shape.getTotalLength().toFixed(0) * percentNumber.getAttribute('data-number') / 100;
            var progressShow = shape.setAttribute('stroke-dashoffset', shapeLength);
            percentNumber.innerText = percentNumber.getAttribute('data-number') + '%';
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
    var g_top = 0;
    $(window).scroll(function () {
        //skills
        if ($(this).scrollTop() > 1000) {
            startAnimateSkills();
        };
        //navbar
        if ($(this).scrollTop() < g_top) {
            $(navbar).css("transform", "translateY(0)");
        } else {
            $(navbar).css("transform", "translateY(-100px)");
        };
        g_top = $(this).scrollTop();
        //Text
        if ($(this).scrollTop() > 350) {
            var text = document.getElementsByClassName("header__text-about");
            $(text).addClass("active");
        };
        //title
        if ($(this).scrollTop() > 150) {
            var title = document.getElementsByClassName("header__title-about");
            $(title).addClass("active");
        };
        if ($(this).scrollTop() > 500) {
            var skiils = document.getElementsByClassName("skills");
            $(skills).addClass("active");
        };
    });

    //Slider************************************************************ 
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: true,
        autoHeight: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                center: false
            },
            1024: {
                items: 3
            }
        }
    });

    //Animation particle***********************************************
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        w = canvas.width = innerWidth,
        h = canvas.height = innerHeight,
        particles = [],
        properties;
    if ($(window).width() < 576) {
        properties = {
            bgColor: 'rgba(243, 236, 236, .9)',
            particleColor: 'rgba(125,115, 115, .7)',
            particleRadius: 3,
            particleCount: 35,
            particleMaxVelocity: .6,
            lineLength: 150,
            particleLife: 8
        };
    } else {
        properties = {
            bgColor: 'rgba(243, 236, 236, .9)',
            particleColor: 'rgba(125,115, 115, .7)',
            particleRadius: 3,
            particleCount: 70,
            particleMaxVelocity: .6,
            lineLength: 180,
            particleLife: 8
        };
    }

    document.querySelector('header').appendChild(canvas);

    window.onresize = function () {
        w = canvas.width = innerWidth, h = canvas.height = innerHeight;
    };

    var Particle = function () {
        function Particle() {
            _classCallCheck(this, Particle);

            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
            this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
            this.life = Math.random() * properties.particleLife * 60;
        }

        _createClass(Particle, [{
            key: 'position',
            value: function position() {
                this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0 ? this.velocityX *= -1 : this.velocityX;
                this.y + this.velocityY > h && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0 ? this.velocityY *= -1 : this.velocityY;
                this.x += this.velocityX;
                this.y += this.velocityY;
            }
        }, {
            key: 'reDraw',
            value: function reDraw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = properties.particleColor;
                ctx.fill();
            }
        }, {
            key: 'reCalculateLife',
            value: function reCalculateLife() {
                if (this.life < 1) {
                    this.x = Math.random() * w;
                    this.y = Math.random() * h;
                    this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                    this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                    this.life = Math.random() * properties.particleLife * 60;
                }
                this.life--;
            }
        }]);

        return Particle;
    }();

    function reDrawBackground() {
        ctx.fillStyle = properties.bgColor;
        ctx.fillRect(0, 0, w, h);
    }

    function drawLines() {
        var x1, y1, x2, y2, length, opacity;
        for (var i in particles) {
            for (var j in particles) {
                x1 = particles[i].x;
                y1 = particles[i].y;
                x2 = particles[j].x;
                y2 = particles[j].y;
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                if (length < properties.lineLength) {
                    opacity = 1 - length / properties.lineLength;
                    ctx.lineWidth = '1';
                    ctx.strokeStyle = 'rgba(125,115, 115, ' + opacity + ')';
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        }
    }

    function reDrawParticles() {
        for (var i in particles) {
            particles[i].reCalculateLife();
            particles[i].position();
            particles[i].reDraw();
        }
    }

    function loop() {
        reDrawBackground();
        reDrawParticles();
        drawLines();
        requestAnimationFrame(loop);
    }

    function init() {
        for (var i = 0; i < properties.particleCount; i++) {
            particles.push(new Particle());
        }
        loop();
    }

    init();
});