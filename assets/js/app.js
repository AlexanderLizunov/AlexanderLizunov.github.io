    var paralax = (function () {
        var bg1 = document.querySelector('.layer1');
        var bg2 = document.querySelector('.C-hero__block');


        return {
            move: function (block, windowScroll, strafeAmount) {
                var strafe = windowScroll / strafeAmount + '%';
                var transformString= 'translate3d(-50%,'+strafe+',0)';
                var style = block.style;
                style.transform = transformString;
                style.webkittransform = transformString;

            },
            init: function (wScroll) {
                this.move(bg1,wScroll, 40);
                this.move(bg2,wScroll, 3);
            }
        }

            ;

    }());
    window.onscroll = function () {
        var wScroll = window.pageYOffset;
        paralax.init(wScroll);


    };


    //MAIN PARALLAX
    var mainParallax = (function () {

        var _main = function () {
            var paralaxContainer = document.getElementById('paralax'),
                layers = paralaxContainer.children;

            window.addEventListener('mousemove', function (e) {
                var pageX = e.pageX,
                    pageY = e.pageY,
                    initialX = (window.innerWidth / 2) - pageX,
                    initialY = (window.innerHeight / 2) - pageY;

                [].slice.call(layers).forEach(function (layer, i) {
                    var cof = i / 100,
                        layerStyle = layer.style,
                        posX = initialX * cof,
                        posY = initialY * cof,
                        verPos = (window.innerHeight / 2) * cof,
                        horPos = (window.innerWidth / 2) * cof,
                        transformStr = 'translate3d(' + posX + 'px, ' + posY + 'px, 0)';

                    layerStyle.webkitTransform = transformStr;
                    layerStyle.mozTransform = transformStr;
                    layerStyle.msTransform = transformStr;
                    layerStyle.oTransform = transformStr;
                    layerStyle.bottom = '-' + verPos + 'px';
                    layerStyle.left = '-' + horPos + 'px';
                    layerStyle.right = '-' + horPos + 'px';
                })
            })
        };

        return {
            init: _main
        }

    })();

    var parallax = document.querySelector("#paralax");

    if(parallax !== null){
        window.onload = function () {
            mainParallax.init();
        }
    }



 //-----------------Tabs

    //var k=$(this).index();
        $('.sidebar-item').on('click',  function() {
            $(this).addClass('side-bar_active').siblings().removeClass('side-bar_active');
            $('.body').animate({ scrollTop: $('h2').eq($(this).index()).offset().top}, 1000);
                });

//-------------------Slider

    $('.slider-up_button').on('click', function () {
        var n=$('.slider-image_active').index()
        var m=$('.slider-main').children('img').length;
        if(n==m-1){
            n=-1;
            $('.slider-main_image').eq(n+1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            console.log(n+1);
        } else{
            $('.slider-main_image').eq(n+1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            console.log(n+1);
        }



    })

    $('.slider-down_button').on('click', function () {
        var n=$('.slider-image_active').index();
        var m=$('.slider-main').children('img').length;

        if(n==0){
            n=m
            $('.slider-main_image').eq(n-1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            console.log(n-1)
        } else{
            $('.slider-main_image').eq(n-1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            console.log(n-1)
        }





    })



    var slider = (function(){
        var counter = 1,
            duration = 300,
            inProcess = false;

        var moveSlide = function (container, direction) {
            var items = $('.slider__item', container),
                activeItem = items.filter('.active'),
                direction = direction == 'down' ? 100 : -100;

            if (counter >= items.length) counter = 0;

            var reqItem = items.eq(counter);

            activeItem.animate({
                'top' : direction + '%'
            }, duration);

            reqItem.animate({
                'top' : '0'
            }, duration, function () {
                activeItem.removeClass('active').css('top', -direction + '%');
                $(this).addClass('active');
                inProcess = false;
            });
        };

        return {
            init: function () {
                $('.slider__controls-top').on('click', function(e){
                    e.preventDefault();

                    if (!inProcess) {
                        inProcess = true;
                        moveSlide($('.slider_first'), 'down');
                        moveSlide($('.slider_opposite'), 'up');
                    }

                    counter++;

                });
            }
        }
    }());

    var slideShow = (function () {
        return {
            init: function () {
                $('.slideshow__link').on('click', function(e){
                    e.preventDefault();

                    var $this = $(this),
                        container = $this.closest('.slideshow'),
                        path = $this.attr('href'),
                        display = container.find('.slideshow__display-pic'),
                        preloader = $('#preloader'),
                        fadedOut = $.Deferred(),
                        loaded = $.Deferred();

                    display.fadeOut(function () {
                        fadedOut.resolve();
                    });

                    fadedOut.done(function () {
                        preloader.show();

                        display.attr('src', path).on('load', function () {
                            loaded.resolve();
                        });
                    });

                    loaded.done(function () {
                        display.fadeIn();
                        preloader.hide();
                    });
                });
            }
        }
    }());

    $(function () {
        slider.init();
        slideShow.init();

        var deferred = $.Deferred();
        var deferred2 = $.Deferred();


        $('.res').on('click', function(e){
            e.preventDefault();

            setTimeout(function () {
                deferred.resolve('res1');
            }, 1000);

        });

        $('.res2').on('click', function(e){
            e.preventDefault();

            setTimeout(function () {
                deferred2.resolve('res2');
            }, 2000);

        });

        $('.rej').on('click', function(e){
            e.preventDefault();

            deferred.reject();
        });

        $.when(deferred, deferred2).done(function (mes1, mes2) {
            console.log(mes1);
            console.log(mes2);
        });

        // deferred.done(function (message) {
        // 	console.log(message);
        // });
        //
        // deferred.fail(function () {
        // 	console.log('object is rejected');
        // });

    });





//-------------ARROW SCROLL

            $('.scroll-down').on('click', function() {
                $(".body").animate({scrollTop:  $(document).height()},'slow');
                return false;
            });


    //----HAMBURGER-MENU
    var isActive = false;

    $('.hamburger').on('click', function() {
        if (isActive) {
            $(this).removeClass('burger-active');
            $( ".hamburger-menu" ).fadeOut( "slow", function() {
                    // Animation complete
               
            });
        } else {
            $(this).addClass('burger-active');
            $('.hamburger-menu').fadeIn('slow', function () {
                
            });
        }

        isActive = !isActive;
    });


    //////FFFFLLLLLLLIIIIP2


    var flip = (function () {

        var flipper = document.querySelector(".flipper"),
            btn = document.querySelector(".sign-up");

        var _login = function () {
            btn.style.display = "none";
            flipper.style.transform = "rotateY(180deg)";
        };

        var _user = function () {
            btn.style.display = "block";
            flipper.style.transform = "rotateY(0deg)";
        };

        return {

            On: _login,
            Off: _user

        }


    })();

    var btnOn = document.querySelector(".sign-up"),
        btnOff = document.querySelector(".btnOf");

    if (btnOn !== null) {
        btnOn.onclick = function () {
            flip.On();
        };

        btnOff.onclick = function () {
            flip.Off();
        };
    }


    //------------------PRELOADER

    var preloader = (function(){
        var percentsTotal = 0;
        var preloader = $('.preloader');

        var imgPath = $('*').map(function (ndx, element) {
            var background = $(element).css('background-image');
            var isImg = $(element).is('img');
            var path = '';

            if (background != 'none') {
                path = background.replace('url("', '').replace('")', '');
            }

            if (isImg) {
                path = $(element).attr('src');
            }

            if (path) return path;
        });

        var setPercents = function(total, current) {
            var percents = Math.ceil(current / total * 100);

            $('.preloader__percents').text(percents + '%');

            if (percents >= 100) {
                preloader.fadeOut();
            }
        }

        var loadImages = function(images) {

            if (!images.length) preloader.fadeOut();

            images.forEach(function(img, i, images){
                var fakeImage = $('<img>', {
                    attr : {
                        src : img
                    }
                });

                fakeImage.on('load error', function(){
                    percentsTotal++;
                    setPercents(images.length, percentsTotal);
                });
            });

        }

        return {
            init: function () {
                var imgs = imgPath.toArray();

                loadImages(imgs);
            }
        }
    }());

    $(function () {
        preloader.init();
    });



    //-----------------------SKILLS
    var skills = (function () {

        var htmlC = document.querySelector(".circle-html"),
            cssC = document.querySelector(".circle-css"),
            jsC = document.querySelector(".circle-js"),
            phpC = document.querySelector(".circle-php"),
            sqlC = document.querySelector(".circle-sql"),
            nodejsC = document.querySelector(".circle-node"),
            mongoC = document.querySelector(".circle-mongo"),
            gitC = document.querySelector(".circle-git"),
            gulpC = document.querySelector(".circle-gulp"),
            bowerC = document.querySelector(".circle-bower");

        return {

            move: function (item, windowScroll, percent) {
                var style = item.style,
                    itemPer = 314 * percent / 100;

                if (windowScroll >= 750) {
                    style.strokeDasharray = itemPer + ' 722';
                }

            },

            init: function (wScroll) {
                this.move(htmlC, wScroll, 80);
                this.move(cssC, wScroll, 70);
                this.move(jsC, wScroll, 40);
                this.move(phpC, wScroll, 10);
                this.move(sqlC, wScroll, 10);
                this.move(nodejsC, wScroll, 20);
                this.move(mongoC, wScroll, 15);
                this.move(gitC, wScroll, 65);
                this.move(gulpC, wScroll, 75);
                this.move(bowerC, wScroll, 80);
            }
        }

    })();

    var skillsList = document.querySelector(".skills-group");

    if (skillsList !== null) {
        window.onscroll = function () {
            var wScroll = window.pageYOffset;

            paralax.init(wScroll);

            skills.init(wScroll);
        };
    }


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIHZhciBwYXJhbGF4ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYmcxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxheWVyMScpO1xyXG4gICAgICAgIHZhciBiZzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQy1oZXJvX19ibG9jaycpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbW92ZTogZnVuY3Rpb24gKGJsb2NrLCB3aW5kb3dTY3JvbGwsIHN0cmFmZUFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0cmFmZSA9IHdpbmRvd1Njcm9sbCAvIHN0cmFmZUFtb3VudCArICclJztcclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1TdHJpbmc9ICd0cmFuc2xhdGUzZCgtNTAlLCcrc3RyYWZlKycsMCknO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gYmxvY2suc3R5bGU7XHJcbiAgICAgICAgICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBzdHlsZS53ZWJraXR0cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAod1Njcm9sbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGJnMSx3U2Nyb2xsLCA0MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoYmcyLHdTY3JvbGwsIDMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgO1xyXG5cclxuICAgIH0oKSk7XHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgcGFyYWxheC5pbml0KHdTY3JvbGwpO1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvL01BSU4gUEFSQUxMQVhcclxuICAgIHZhciBtYWluUGFyYWxsYXggPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgX21haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbGF4Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsYXgnKSxcclxuICAgICAgICAgICAgICAgIGxheWVycyA9IHBhcmFsYXhDb250YWluZXIuY2hpbGRyZW47XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYWdlWCA9IGUucGFnZVgsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVkgPSBlLnBhZ2VZLFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxYID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLSBwYWdlWCxcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIHBhZ2VZO1xyXG5cclxuICAgICAgICAgICAgICAgIFtdLnNsaWNlLmNhbGwobGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChsYXllciwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2YgPSBpIC8gMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlID0gbGF5ZXIuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1ggPSBpbml0aWFsWCAqIGNvZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWSA9IGluaXRpYWxZICogY29mLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJQb3MgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgKiBjb2YsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvclBvcyA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpICogY29mLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHIgPSAndHJhbnNsYXRlM2QoJyArIHBvc1ggKyAncHgsICcgKyBwb3NZICsgJ3B4LCAwKSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUubW96VHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdHlsZS5vVHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUuYm90dG9tID0gJy0nICsgdmVyUG9zICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlLmxlZnQgPSAnLScgKyBob3JQb3MgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUucmlnaHQgPSAnLScgKyBob3JQb3MgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbml0OiBfbWFpblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHZhciBwYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFyYWxheFwiKTtcclxuXHJcbiAgICBpZihwYXJhbGxheCAhPT0gbnVsbCl7XHJcbiAgICAgICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbWFpblBhcmFsbGF4LmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAvLy0tLS0tLS0tLS0tLS0tLS0tVGFic1xyXG5cclxuICAgIC8vdmFyIGs9JCh0aGlzKS5pbmRleCgpO1xyXG4gICAgICAgICQoJy5zaWRlYmFyLWl0ZW0nKS5vbignY2xpY2snLCAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NpZGUtYmFyX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NpZGUtYmFyX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoJ2gyJykuZXEoJCh0aGlzKS5pbmRleCgpKS5vZmZzZXQoKS50b3B9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tU2xpZGVyXHJcblxyXG4gICAgJCgnLnNsaWRlci11cF9idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG49JCgnLnNsaWRlci1pbWFnZV9hY3RpdmUnKS5pbmRleCgpXHJcbiAgICAgICAgdmFyIG09JCgnLnNsaWRlci1tYWluJykuY2hpbGRyZW4oJ2ltZycpLmxlbmd0aDtcclxuICAgICAgICBpZihuPT1tLTEpe1xyXG4gICAgICAgICAgICBuPS0xO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLW1haW5faW1hZ2UnKS5lcShuKzEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuKzEpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgJCgnLnNsaWRlci1tYWluX2ltYWdlJykuZXEobisxKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobisxKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9KVxyXG5cclxuICAgICQoJy5zbGlkZXItZG93bl9idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG49JCgnLnNsaWRlci1pbWFnZV9hY3RpdmUnKS5pbmRleCgpO1xyXG4gICAgICAgIHZhciBtPSQoJy5zbGlkZXItbWFpbicpLmNoaWxkcmVuKCdpbWcnKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmKG49PTApe1xyXG4gICAgICAgICAgICBuPW1cclxuICAgICAgICAgICAgJCgnLnNsaWRlci1tYWluX2ltYWdlJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobi0xKVxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgJCgnLnNsaWRlci1tYWluX2ltYWdlJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobi0xKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIHZhciBzbGlkZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgY291bnRlciA9IDEsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgICAgICBpblByb2Nlc3MgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIG1vdmVTbGlkZSA9IGZ1bmN0aW9uIChjb250YWluZXIsIGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSAkKCcuc2xpZGVyX19pdGVtJywgY29udGFpbmVyKSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW0gPSBpdGVtcy5maWx0ZXIoJy5hY3RpdmUnKSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PSAnZG93bicgPyAxMDAgOiAtMTAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPj0gaXRlbXMubGVuZ3RoKSBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXFJdGVtID0gaXRlbXMuZXEoY291bnRlcik7XHJcblxyXG4gICAgICAgICAgICBhY3RpdmVJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgJ3RvcCcgOiBkaXJlY3Rpb24gKyAnJSdcclxuICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgcmVxSXRlbS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICd0b3AnIDogJzAnXHJcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5jc3MoJ3RvcCcsIC1kaXJlY3Rpb24gKyAnJScpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBpblByb2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlcl9fY29udHJvbHMtdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWluUHJvY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpblByb2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGUoJCgnLnNsaWRlcl9maXJzdCcpLCAnZG93bicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGUoJCgnLnNsaWRlcl9vcHBvc2l0ZScpLCAndXAnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0oKSk7XHJcblxyXG4gICAgdmFyIHNsaWRlU2hvdyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlc2hvd19fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyID0gJHRoaXMuY2xvc2VzdCgnLnNsaWRlc2hvdycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gJHRoaXMuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXNob3dfX2Rpc3BsYXktcGljJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWRlciA9ICQoJyNwcmVsb2FkZXInKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFkZWRPdXQgPSAkLkRlZmVycmVkKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlZCA9ICQuRGVmZXJyZWQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5mYWRlT3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFkZWRPdXQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmYWRlZE91dC5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZGVyLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkuYXR0cignc3JjJywgcGF0aCkub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVsb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KCkpO1xyXG5cclxuICAgICQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNsaWRlci5pbml0KCk7XHJcbiAgICAgICAgc2xpZGVTaG93LmluaXQoKTtcclxuXHJcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xyXG4gICAgICAgIHZhciBkZWZlcnJlZDIgPSAkLkRlZmVycmVkKCk7XHJcblxyXG5cclxuICAgICAgICAkKCcucmVzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgncmVzMScpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5yZXMyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQyLnJlc29sdmUoJ3JlczInKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcucmVqJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkLndoZW4oZGVmZXJyZWQsIGRlZmVycmVkMikuZG9uZShmdW5jdGlvbiAobWVzMSwgbWVzMikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXMxKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzMik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGRlZmVycmVkLmRvbmUoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAvLyBcdGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gZGVmZXJyZWQuZmFpbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gXHRjb25zb2xlLmxvZygnb2JqZWN0IGlzIHJlamVjdGVkJyk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tQVJST1cgU0NST0xMXHJcblxyXG4gICAgICAgICAgICAkKCcuc2Nyb2xsLWRvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6ICAkKGRvY3VtZW50KS5oZWlnaHQoKX0sJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIC8vLS0tLUhBTUJVUkdFUi1NRU5VXHJcbiAgICB2YXIgaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAkKCcuaGFtYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2J1cmdlci1hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCggXCIuaGFtYnVyZ2VyLW1lbnVcIiApLmZhZGVPdXQoIFwic2xvd1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBbmltYXRpb24gY29tcGxldGVcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2J1cmdlci1hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLmhhbWJ1cmdlci1tZW51JykuZmFkZUluKCdzbG93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNBY3RpdmUgPSAhaXNBY3RpdmU7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8vLy8vRkZGRkxMTExMTExJSUlJUDJcclxuXHJcblxyXG4gICAgdmFyIGZsaXAgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgZmxpcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmxpcHBlclwiKSxcclxuICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWduLXVwXCIpO1xyXG5cclxuICAgICAgICB2YXIgX2xvZ2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBidG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBmbGlwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgxODBkZWcpXCI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIF91c2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBidG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgZmxpcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoMGRlZylcIjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgT246IF9sb2dpbixcclxuICAgICAgICAgICAgT2ZmOiBfdXNlclxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgdmFyIGJ0bk9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWduLXVwXCIpLFxyXG4gICAgICAgIGJ0bk9mZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuT2ZcIik7XHJcblxyXG4gICAgaWYgKGJ0bk9uICE9PSBudWxsKSB7XHJcbiAgICAgICAgYnRuT24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZmxpcC5PbigpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGJ0bk9mZi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmbGlwLk9mZigpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tUFJFTE9BREVSXHJcblxyXG4gICAgdmFyIHByZWxvYWRlciA9IChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBwZXJjZW50c1RvdGFsID0gMDtcclxuICAgICAgICB2YXIgcHJlbG9hZGVyID0gJCgnLnByZWxvYWRlcicpO1xyXG5cclxuICAgICAgICB2YXIgaW1nUGF0aCA9ICQoJyonKS5tYXAoZnVuY3Rpb24gKG5keCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgYmFja2dyb3VuZCA9ICQoZWxlbWVudCkuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyk7XHJcbiAgICAgICAgICAgIHZhciBpc0ltZyA9ICQoZWxlbWVudCkuaXMoJ2ltZycpO1xyXG4gICAgICAgICAgICB2YXIgcGF0aCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhY2tncm91bmQgIT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gYmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNJbWcpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSAkKGVsZW1lbnQpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocGF0aCkgcmV0dXJuIHBhdGg7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBzZXRQZXJjZW50cyA9IGZ1bmN0aW9uKHRvdGFsLCBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBwZXJjZW50cyA9IE1hdGguY2VpbChjdXJyZW50IC8gdG90YWwgKiAxMDApO1xyXG5cclxuICAgICAgICAgICAgJCgnLnByZWxvYWRlcl9fcGVyY2VudHMnKS50ZXh0KHBlcmNlbnRzICsgJyUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwZXJjZW50cyA+PSAxMDApIHtcclxuICAgICAgICAgICAgICAgIHByZWxvYWRlci5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsb2FkSW1hZ2VzID0gZnVuY3Rpb24oaW1hZ2VzKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWltYWdlcy5sZW5ndGgpIHByZWxvYWRlci5mYWRlT3V0KCk7XHJcblxyXG4gICAgICAgICAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbihpbWcsIGksIGltYWdlcyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmFrZUltYWdlID0gJCgnPGltZz4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ciA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjIDogaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZmFrZUltYWdlLm9uKCdsb2FkIGVycm9yJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50c1RvdGFsKys7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGVyY2VudHMoaW1hZ2VzLmxlbmd0aCwgcGVyY2VudHNUb3RhbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGltZ3MgPSBpbWdQYXRoLnRvQXJyYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2FkSW1hZ2VzKGltZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSgpKTtcclxuXHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcmVsb2FkZXIuaW5pdCgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0tJTExTXHJcbiAgICB2YXIgc2tpbGxzID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIGh0bWxDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtaHRtbFwiKSxcclxuICAgICAgICAgICAgY3NzQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLWNzc1wiKSxcclxuICAgICAgICAgICAganNDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtanNcIiksXHJcbiAgICAgICAgICAgIHBocEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1waHBcIiksXHJcbiAgICAgICAgICAgIHNxbEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1zcWxcIiksXHJcbiAgICAgICAgICAgIG5vZGVqc0MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1ub2RlXCIpLFxyXG4gICAgICAgICAgICBtb25nb0MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1tb25nb1wiKSxcclxuICAgICAgICAgICAgZ2l0QyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLWdpdFwiKSxcclxuICAgICAgICAgICAgZ3VscEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1ndWxwXCIpLFxyXG4gICAgICAgICAgICBib3dlckMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1ib3dlclwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIG1vdmU6IGZ1bmN0aW9uIChpdGVtLCB3aW5kb3dTY3JvbGwsIHBlcmNlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGl0ZW0uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBlciA9IDMxNCAqIHBlcmNlbnQgLyAxMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd1Njcm9sbCA+PSA3NTApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBpdGVtUGVyICsgJyA3MjInO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3U2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoaHRtbEMsIHdTY3JvbGwsIDgwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShjc3NDLCB3U2Nyb2xsLCA3MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoanNDLCB3U2Nyb2xsLCA0MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUocGhwQywgd1Njcm9sbCwgMTApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHNxbEMsIHdTY3JvbGwsIDEwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShub2RlanNDLCB3U2Nyb2xsLCAyMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUobW9uZ29DLCB3U2Nyb2xsLCAxNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoZ2l0Qywgd1Njcm9sbCwgNjUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGd1bHBDLCB3U2Nyb2xsLCA3NSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoYm93ZXJDLCB3U2Nyb2xsLCA4MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICB2YXIgc2tpbGxzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2tpbGxzLWdyb3VwXCIpO1xyXG5cclxuICAgIGlmIChza2lsbHNMaXN0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcbiAgICAgICAgICAgIHBhcmFsYXguaW5pdCh3U2Nyb2xsKTtcclxuXHJcbiAgICAgICAgICAgIHNraWxscy5pbml0KHdTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4iXX0=
