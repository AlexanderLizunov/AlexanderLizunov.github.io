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
        var n=$('.slider-image_active').index();
        var m=$('.slider-main').children('img').length;
        if(n==m-1){
            $('.slider-main_image').eq(0).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-down_image').eq(m-1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-up_image').eq(1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            console.log(n+1);
        } else if(n==m-2){
            $('.slider-main_image').eq(n+1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-down_image').eq(n).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-up_image').eq(0).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            console.log(n+1);
        }else {
            $('.slider-main_image').eq(n+1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-down_image').eq(n).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-up_image').eq(n+2).addClass('slider-image_active').siblings().removeClass('slider-image_active');
        }



    });

    $('.slider-down_button').on('click', function () {
        var n=$('.slider-image_active').index();
        var m=$('.slider-main').children('img').length;
        console.log(n)
        if(n==0){
            $('.slider-main_image').eq(m-1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-down_image').eq(m-2).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-up_image').eq(0).addClass('slider-image_active').siblings().removeClass('slider-image_active');
        }else if(n==1){
                $('.slider-main_image').eq(n-1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
                $('.slider-down_image').eq(m-1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
                $('.slider-up_image').eq(n).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            }else {
                $('.slider-main_image').eq(n-1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
                $('.slider-down_image').eq(n-2).addClass('slider-image_active').siblings().removeClass('slider-image_active');
                $('.slider-up_image').eq(n).addClass('slider-image_active').siblings().removeClass('slider-image_active');

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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICB2YXIgcGFyYWxheCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJnMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXllcjEnKTtcclxuICAgICAgICB2YXIgYmcyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkMtaGVyb19fYmxvY2snKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1vdmU6IGZ1bmN0aW9uIChibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyBzdHJhZmVBbW91bnQgKyAnJSc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNmb3JtU3RyaW5nPSAndHJhbnNsYXRlM2QoLTUwJSwnK3N0cmFmZSsnLDApJztcclxuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGJsb2NrLnN0eWxlO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUud2Via2l0dHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdTY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShiZzEsd1Njcm9sbCwgNDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGJnMix3U2Nyb2xsLCAzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICB9KCkpO1xyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIHBhcmFsYXguaW5pdCh3U2Nyb2xsKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy9NQUlOIFBBUkFMTEFYXHJcbiAgICB2YXIgbWFpblBhcmFsbGF4ID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIF9tYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcGFyYWxheENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbGF4JyksXHJcbiAgICAgICAgICAgICAgICBsYXllcnMgPSBwYXJhbGF4Q29udGFpbmVyLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFnZVggPSBlLnBhZ2VYLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VZID0gZS5wYWdlWSxcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC0gcGFnZVgsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgLSBwYWdlWTtcclxuXHJcbiAgICAgICAgICAgICAgICBbXS5zbGljZS5jYWxsKGxheWVycykuZm9yRWFjaChmdW5jdGlvbiAobGF5ZXIsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29mID0gaSAvIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdHlsZSA9IGxheWVyLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NYID0gaW5pdGlhbFggKiBjb2YsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1kgPSBpbml0aWFsWSAqIGNvZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyUG9zID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpICogY29mLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JQb3MgPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAqIGNvZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RyID0gJ3RyYW5zbGF0ZTNkKCcgKyBwb3NYICsgJ3B4LCAnICsgcG9zWSArICdweCwgMCknO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cjtcclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlLm1velRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cjtcclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUub1RyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cjtcclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlLmJvdHRvbSA9ICctJyArIHZlclBvcyArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdHlsZS5sZWZ0ID0gJy0nICsgaG9yUG9zICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlLnJpZ2h0ID0gJy0nICsgaG9yUG9zICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5pdDogX21haW5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICB2YXIgcGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhcmFsYXhcIik7XHJcblxyXG4gICAgaWYocGFyYWxsYXggIT09IG51bGwpe1xyXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1haW5QYXJhbGxheC5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gLy8tLS0tLS0tLS0tLS0tLS0tLVRhYnNcclxuXHJcbiAgICAvL3ZhciBrPSQodGhpcykuaW5kZXgoKTtcclxuICAgICAgICAkKCcuc2lkZWJhci1pdGVtJykub24oJ2NsaWNrJywgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzaWRlLWJhcl9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzaWRlLWJhcl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLmJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKCdoMicpLmVxKCQodGhpcykuaW5kZXgoKSkub2Zmc2V0KCkudG9wfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLVNsaWRlclxyXG5cclxuICAgICQoJy5zbGlkZXItdXBfYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBuPSQoJy5zbGlkZXItaW1hZ2VfYWN0aXZlJykuaW5kZXgoKTtcclxuICAgICAgICB2YXIgbT0kKCcuc2xpZGVyLW1haW4nKS5jaGlsZHJlbignaW1nJykubGVuZ3RoO1xyXG4gICAgICAgIGlmKG49PW0tMSl7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItbWFpbl9pbWFnZScpLmVxKDApLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWRvd25faW1hZ2UnKS5lcShtLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEoMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG4rMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKG49PW0tMil7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItbWFpbl9pbWFnZScpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItZG93bl9pbWFnZScpLmVxKG4pLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG4rMSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLW1haW5faW1hZ2UnKS5lcShuKzEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWRvd25faW1hZ2UnKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLnNsaWRlci11cF9pbWFnZScpLmVxKG4rMikuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNsaWRlci1kb3duX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbj0kKCcuc2xpZGVyLWltYWdlX2FjdGl2ZScpLmluZGV4KCk7XHJcbiAgICAgICAgdmFyIG09JCgnLnNsaWRlci1tYWluJykuY2hpbGRyZW4oJ2ltZycpLmxlbmd0aDtcclxuICAgICAgICBjb25zb2xlLmxvZyhuKVxyXG4gICAgICAgIGlmKG49PTApe1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLW1haW5faW1hZ2UnKS5lcShtLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWRvd25faW1hZ2UnKS5lcShtLTIpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgfWVsc2UgaWYobj09MSl7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyLW1haW5faW1hZ2UnKS5lcShuLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlci1kb3duX2ltYWdlJykuZXEobS0xKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXItdXBfaW1hZ2UnKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlci1tYWluX2ltYWdlJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXItZG93bl9pbWFnZScpLmVxKG4tMikuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEobikuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgdmFyIHNsaWRlciA9IChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gMSxcclxuICAgICAgICAgICAgZHVyYXRpb24gPSAzMDAsXHJcbiAgICAgICAgICAgIGluUHJvY2VzcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgbW92ZVNsaWRlID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9ICQoJy5zbGlkZXJfX2l0ZW0nLCBjb250YWluZXIpLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcignLmFjdGl2ZScpLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uID09ICdkb3duJyA/IDEwMCA6IC0xMDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoY291bnRlciA+PSBpdGVtcy5sZW5ndGgpIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcUl0ZW0gPSBpdGVtcy5lcShjb3VudGVyKTtcclxuXHJcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAndG9wJyA6IGRpcmVjdGlvbiArICclJ1xyXG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XHJcblxyXG4gICAgICAgICAgICByZXFJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgJ3RvcCcgOiAnMCdcclxuICAgICAgICAgICAgfSwgZHVyYXRpb24sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmNzcygndG9wJywgLWRpcmVjdGlvbiArICclJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGluUHJvY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyX19jb250cm9scy10b3AnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5Qcm9jZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluUHJvY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVTbGlkZSgkKCcuc2xpZGVyX2ZpcnN0JyksICdkb3duJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVTbGlkZSgkKCcuc2xpZGVyX29wcG9zaXRlJyksICd1cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSgpKTtcclxuXHJcbiAgICB2YXIgc2xpZGVTaG93ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVzaG93X19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSAkdGhpcy5jbG9zZXN0KCcuc2xpZGVzaG93JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggPSAkdGhpcy5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgPSBjb250YWluZXIuZmluZCgnLnNsaWRlc2hvd19fZGlzcGxheS1waWMnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZGVyID0gJCgnI3ByZWxvYWRlcicpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWRlZE91dCA9ICQuRGVmZXJyZWQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVkID0gJC5EZWZlcnJlZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LmZhZGVPdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWRlZE91dC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZhZGVkT3V0LmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVsb2FkZXIuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5hdHRyKCdzcmMnLCBwYXRoKS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0oKSk7XHJcblxyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2xpZGVyLmluaXQoKTtcclxuICAgICAgICBzbGlkZVNob3cuaW5pdCgpO1xyXG5cclxuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAgICAgdmFyIGRlZmVycmVkMiA9ICQuRGVmZXJyZWQoKTtcclxuXHJcblxyXG4gICAgICAgICQoJy5yZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCdyZXMxJyk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnJlczInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZDIucmVzb2x2ZSgncmVzMicpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5yZWonKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQud2hlbihkZWZlcnJlZCwgZGVmZXJyZWQyKS5kb25lKGZ1bmN0aW9uIChtZXMxLCBtZXMyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lczEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXMyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZGVmZXJyZWQuZG9uZShmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIC8vIFx0Y29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBkZWZlcnJlZC5mYWlsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBcdGNvbnNvbGUubG9nKCdvYmplY3QgaXMgcmVqZWN0ZWQnKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS1BUlJPVyBTQ1JPTExcclxuXHJcbiAgICAgICAgICAgICQoJy5zY3JvbGwtZG93bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5ib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogICQoZG9jdW1lbnQpLmhlaWdodCgpfSwnc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgLy8tLS0tSEFNQlVSR0VSLU1FTlVcclxuICAgIHZhciBpc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICQoJy5oYW1idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYnVyZ2VyLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCBcIi5oYW1idXJnZXItbWVudVwiICkuZmFkZU91dCggXCJzbG93XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBjb21wbGV0ZVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYnVyZ2VyLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuaGFtYnVyZ2VyLW1lbnUnKS5mYWRlSW4oJ3Nsb3cnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpc0FjdGl2ZSA9ICFpc0FjdGl2ZTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLy8vLy9GRkZGTExMTExMTElJSUlQMlxyXG5cclxuXHJcbiAgICB2YXIgZmxpcCA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBmbGlwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mbGlwcGVyXCIpLFxyXG4gICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ24tdXBcIik7XHJcblxyXG4gICAgICAgIHZhciBfbG9naW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGZsaXBwZXIuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDE4MGRlZylcIjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgX3VzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBmbGlwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgwZGVnKVwiO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICBPbjogX2xvZ2luLFxyXG4gICAgICAgICAgICBPZmY6IF91c2VyXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICB2YXIgYnRuT24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ24tdXBcIiksXHJcbiAgICAgICAgYnRuT2ZmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5PZlwiKTtcclxuXHJcbiAgICBpZiAoYnRuT24gIT09IG51bGwpIHtcclxuICAgICAgICBidG5Pbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmbGlwLk9uKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYnRuT2ZmLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZsaXAuT2ZmKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS1QUkVMT0FERVJcclxuXHJcbiAgICB2YXIgcHJlbG9hZGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHBlcmNlbnRzVG90YWwgPSAwO1xyXG4gICAgICAgIHZhciBwcmVsb2FkZXIgPSAkKCcucHJlbG9hZGVyJyk7XHJcblxyXG4gICAgICAgIHZhciBpbWdQYXRoID0gJCgnKicpLm1hcChmdW5jdGlvbiAobmR4LCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kID0gJChlbGVtZW50KS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKTtcclxuICAgICAgICAgICAgdmFyIGlzSW1nID0gJChlbGVtZW50KS5pcygnaW1nJyk7XHJcbiAgICAgICAgICAgIHZhciBwYXRoID0gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmFja2dyb3VuZCAhPSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBiYWNrZ3JvdW5kLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCdcIiknLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpc0ltZykge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9ICQoZWxlbWVudCkuYXR0cignc3JjJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwYXRoKSByZXR1cm4gcGF0aDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHNldFBlcmNlbnRzID0gZnVuY3Rpb24odG90YWwsIGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHBlcmNlbnRzID0gTWF0aC5jZWlsKGN1cnJlbnQgLyB0b3RhbCAqIDEwMCk7XHJcblxyXG4gICAgICAgICAgICAkKCcucHJlbG9hZGVyX19wZXJjZW50cycpLnRleHQocGVyY2VudHMgKyAnJScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBlcmNlbnRzID49IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgcHJlbG9hZGVyLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxvYWRJbWFnZXMgPSBmdW5jdGlvbihpbWFnZXMpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghaW1hZ2VzLmxlbmd0aCkgcHJlbG9hZGVyLmZhZGVPdXQoKTtcclxuXHJcbiAgICAgICAgICAgIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uKGltZywgaSwgaW1hZ2VzKXtcclxuICAgICAgICAgICAgICAgIHZhciBmYWtlSW1hZ2UgPSAkKCc8aW1nPicsIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmMgOiBpbWdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmYWtlSW1hZ2Uub24oJ2xvYWQgZXJyb3InLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnRzVG90YWwrKztcclxuICAgICAgICAgICAgICAgICAgICBzZXRQZXJjZW50cyhpbWFnZXMubGVuZ3RoLCBwZXJjZW50c1RvdGFsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1ncyA9IGltZ1BhdGgudG9BcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxvYWRJbWFnZXMoaW1ncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KCkpO1xyXG5cclxuICAgICQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHByZWxvYWRlci5pbml0KCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TS0lMTFNcclxuICAgIHZhciBza2lsbHMgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgaHRtbEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1odG1sXCIpLFxyXG4gICAgICAgICAgICBjc3NDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtY3NzXCIpLFxyXG4gICAgICAgICAgICBqc0MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1qc1wiKSxcclxuICAgICAgICAgICAgcGhwQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLXBocFwiKSxcclxuICAgICAgICAgICAgc3FsQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLXNxbFwiKSxcclxuICAgICAgICAgICAgbm9kZWpzQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLW5vZGVcIiksXHJcbiAgICAgICAgICAgIG1vbmdvQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLW1vbmdvXCIpLFxyXG4gICAgICAgICAgICBnaXRDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtZ2l0XCIpLFxyXG4gICAgICAgICAgICBndWxwQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLWd1bHBcIiksXHJcbiAgICAgICAgICAgIGJvd2VyQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLWJvd2VyXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgbW92ZTogZnVuY3Rpb24gKGl0ZW0sIHdpbmRvd1Njcm9sbCwgcGVyY2VudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gaXRlbS5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUGVyID0gMzE0ICogcGVyY2VudCAvIDEwMDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93U2Nyb2xsID49IDc1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGl0ZW1QZXIgKyAnIDcyMic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdTY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShodG1sQywgd1Njcm9sbCwgODApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGNzc0MsIHdTY3JvbGwsIDcwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShqc0MsIHdTY3JvbGwsIDQwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShwaHBDLCB3U2Nyb2xsLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoc3FsQywgd1Njcm9sbCwgMTApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKG5vZGVqc0MsIHdTY3JvbGwsIDIwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShtb25nb0MsIHdTY3JvbGwsIDE1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShnaXRDLCB3U2Nyb2xsLCA2NSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoZ3VscEMsIHdTY3JvbGwsIDc1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShib3dlckMsIHdTY3JvbGwsIDgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHZhciBza2lsbHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5za2lsbHMtZ3JvdXBcIik7XHJcblxyXG4gICAgaWYgKHNraWxsc0xpc3QgIT09IG51bGwpIHtcclxuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuICAgICAgICAgICAgcGFyYWxheC5pbml0KHdTY3JvbGwpO1xyXG5cclxuICAgICAgICAgICAgc2tpbGxzLmluaXQod1Njcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiJdfQ==
