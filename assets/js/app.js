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
            $('.slider-comment_block').eq(0).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-down_image').eq(m-1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-up_image').eq(1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            console.log(n+1);
        } else if(n==m-2){
            $('.slider-main_image').eq(n+1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-comment_block').eq(n+1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-down_image').eq(n).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-up_image').eq(0).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            console.log(n+1);
        }else {
            $('.slider-main_image').eq(n+1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-comment_block').eq(n+1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
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
            $('.slider-comment_block').eq(m-1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-down_image').eq(m-2).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            $('.slider-up_image').eq(0).addClass('slider-image_active').siblings().removeClass('slider-image_active');
        }else if(n==1){
                $('.slider-main_image').eq(n-1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
                $('.slider-comment_block').eq(n-1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
                $('.slider-down_image').eq(m-1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
                $('.slider-up_image').eq(n).addClass('slider-image_active').siblings().removeClass('slider-image_active');
            }else {
                $('.slider-main_image').eq(n-1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
                $('.slider-comment_block').eq(n-1).addClass('slider-image_active').siblings().removeClass('slider-image_active');
                $('.slider-down_image').eq(n-2).addClass('slider-image_active').siblings().removeClass('slider-image_active');
                $('.slider-up_image').eq(n).addClass('slider-image_active').siblings().removeClass('slider-image_active');

            }
    })









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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIHZhciBwYXJhbGF4ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYmcxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxheWVyMScpO1xyXG4gICAgICAgIHZhciBiZzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQy1oZXJvX19ibG9jaycpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbW92ZTogZnVuY3Rpb24gKGJsb2NrLCB3aW5kb3dTY3JvbGwsIHN0cmFmZUFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0cmFmZSA9IHdpbmRvd1Njcm9sbCAvIHN0cmFmZUFtb3VudCArICclJztcclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1TdHJpbmc9ICd0cmFuc2xhdGUzZCgtNTAlLCcrc3RyYWZlKycsMCknO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gYmxvY2suc3R5bGU7XHJcbiAgICAgICAgICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBzdHlsZS53ZWJraXR0cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAod1Njcm9sbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGJnMSx3U2Nyb2xsLCA0MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoYmcyLHdTY3JvbGwsIDMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgO1xyXG5cclxuICAgIH0oKSk7XHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgcGFyYWxheC5pbml0KHdTY3JvbGwpO1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvL01BSU4gUEFSQUxMQVhcclxuICAgIHZhciBtYWluUGFyYWxsYXggPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgX21haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbGF4Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsYXgnKSxcclxuICAgICAgICAgICAgICAgIGxheWVycyA9IHBhcmFsYXhDb250YWluZXIuY2hpbGRyZW47XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYWdlWCA9IGUucGFnZVgsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVkgPSBlLnBhZ2VZLFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxYID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLSBwYWdlWCxcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIHBhZ2VZO1xyXG5cclxuICAgICAgICAgICAgICAgIFtdLnNsaWNlLmNhbGwobGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChsYXllciwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2YgPSBpIC8gMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlID0gbGF5ZXIuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1ggPSBpbml0aWFsWCAqIGNvZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWSA9IGluaXRpYWxZICogY29mLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJQb3MgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgKiBjb2YsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvclBvcyA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpICogY29mLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHIgPSAndHJhbnNsYXRlM2QoJyArIHBvc1ggKyAncHgsICcgKyBwb3NZICsgJ3B4LCAwKSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUubW96VHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdHlsZS5vVHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUuYm90dG9tID0gJy0nICsgdmVyUG9zICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlLmxlZnQgPSAnLScgKyBob3JQb3MgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUucmlnaHQgPSAnLScgKyBob3JQb3MgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbml0OiBfbWFpblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHZhciBwYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFyYWxheFwiKTtcclxuXHJcbiAgICBpZihwYXJhbGxheCAhPT0gbnVsbCl7XHJcbiAgICAgICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbWFpblBhcmFsbGF4LmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAvLy0tLS0tLS0tLS0tLS0tLS0tVGFic1xyXG5cclxuICAgIC8vdmFyIGs9JCh0aGlzKS5pbmRleCgpO1xyXG4gICAgICAgICQoJy5zaWRlYmFyLWl0ZW0nKS5vbignY2xpY2snLCAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NpZGUtYmFyX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NpZGUtYmFyX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoJ2gyJykuZXEoJCh0aGlzKS5pbmRleCgpKS5vZmZzZXQoKS50b3B9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tU2xpZGVyXHJcblxyXG4gICAgJCgnLnNsaWRlci11cF9idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG49JCgnLnNsaWRlci1pbWFnZV9hY3RpdmUnKS5pbmRleCgpO1xyXG4gICAgICAgIHZhciBtPSQoJy5zbGlkZXItbWFpbicpLmNoaWxkcmVuKCdpbWcnKS5sZW5ndGg7XHJcbiAgICAgICAgaWYobj09bS0xKXtcclxuICAgICAgICAgICAgJCgnLnNsaWRlci1tYWluX2ltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItY29tbWVudF9ibG9jaycpLmVxKDApLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWRvd25faW1hZ2UnKS5lcShtLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEoMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG4rMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKG49PW0tMil7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItbWFpbl9pbWFnZScpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItY29tbWVudF9ibG9jaycpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItZG93bl9pbWFnZScpLmVxKG4pLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG4rMSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLW1haW5faW1hZ2UnKS5lcShuKzEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfYmxvY2snKS5lcShuKzEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWRvd25faW1hZ2UnKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLnNsaWRlci11cF9pbWFnZScpLmVxKG4rMikuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNsaWRlci1kb3duX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbj0kKCcuc2xpZGVyLWltYWdlX2FjdGl2ZScpLmluZGV4KCk7XHJcbiAgICAgICAgdmFyIG09JCgnLnNsaWRlci1tYWluJykuY2hpbGRyZW4oJ2ltZycpLmxlbmd0aDtcclxuICAgICAgICBjb25zb2xlLmxvZyhuKVxyXG4gICAgICAgIGlmKG49PTApe1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLW1haW5faW1hZ2UnKS5lcShtLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfYmxvY2snKS5lcShtLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWRvd25faW1hZ2UnKS5lcShtLTIpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgfWVsc2UgaWYobj09MSl7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyLW1haW5faW1hZ2UnKS5lcShuLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlci1jb21tZW50X2Jsb2NrJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXItZG93bl9pbWFnZScpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEobikuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXItbWFpbl9pbWFnZScpLmVxKG4tMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfYmxvY2snKS5lcShuLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlci1kb3duX2ltYWdlJykuZXEobi0yKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXItdXBfaW1hZ2UnKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLUFSUk9XIFNDUk9MTFxyXG5cclxuICAgICAgICAgICAgJCgnLnNjcm9sbC1kb3duJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAgJChkb2N1bWVudCkuaGVpZ2h0KCl9LCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLy0tLS1IQU1CVVJHRVItTUVOVVxyXG4gICAgdmFyIGlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgJCgnLmhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdidXJnZXItYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoIFwiLmhhbWJ1cmdlci1tZW51XCIgKS5mYWRlT3V0KCBcInNsb3dcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdidXJnZXItYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5oYW1idXJnZXItbWVudScpLmZhZGVJbignc2xvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzQWN0aXZlID0gIWlzQWN0aXZlO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vLy8vL0ZGRkZMTExMTExMSUlJSVAyXHJcblxyXG5cclxuICAgIHZhciBmbGlwID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIGZsaXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsaXBwZXJcIiksXHJcbiAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbi11cFwiKTtcclxuXHJcbiAgICAgICAgdmFyIF9sb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgZmxpcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoMTgwZGVnKVwiO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBfdXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIGZsaXBwZXIuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDBkZWcpXCI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIE9uOiBfbG9naW4sXHJcbiAgICAgICAgICAgIE9mZjogX3VzZXJcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHZhciBidG5PbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbi11cFwiKSxcclxuICAgICAgICBidG5PZmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bk9mXCIpO1xyXG5cclxuICAgIGlmIChidG5PbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIGJ0bk9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZsaXAuT24oKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBidG5PZmYub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZmxpcC5PZmYoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLVBSRUxPQURFUlxyXG5cclxuICAgIHZhciBwcmVsb2FkZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcGVyY2VudHNUb3RhbCA9IDA7XHJcbiAgICAgICAgdmFyIHByZWxvYWRlciA9ICQoJy5wcmVsb2FkZXInKTtcclxuXHJcbiAgICAgICAgdmFyIGltZ1BhdGggPSAkKCcqJykubWFwKGZ1bmN0aW9uIChuZHgsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIGJhY2tncm91bmQgPSAkKGVsZW1lbnQpLmNzcygnYmFja2dyb3VuZC1pbWFnZScpO1xyXG4gICAgICAgICAgICB2YXIgaXNJbWcgPSAkKGVsZW1lbnQpLmlzKCdpbWcnKTtcclxuICAgICAgICAgICAgdmFyIHBhdGggPSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kICE9ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IGJhY2tncm91bmQucmVwbGFjZSgndXJsKFwiJywgJycpLnJlcGxhY2UoJ1wiKScsICcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzSW1nKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gJChlbGVtZW50KS5hdHRyKCdzcmMnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHBhdGgpIHJldHVybiBwYXRoO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgc2V0UGVyY2VudHMgPSBmdW5jdGlvbih0b3RhbCwgY3VycmVudCkge1xyXG4gICAgICAgICAgICB2YXIgcGVyY2VudHMgPSBNYXRoLmNlaWwoY3VycmVudCAvIHRvdGFsICogMTAwKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5wcmVsb2FkZXJfX3BlcmNlbnRzJykudGV4dChwZXJjZW50cyArICclJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGVyY2VudHMgPj0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbG9hZEltYWdlcyA9IGZ1bmN0aW9uKGltYWdlcykge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpbWFnZXMubGVuZ3RoKSBwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG5cclxuICAgICAgICAgICAgaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24oaW1nLCBpLCBpbWFnZXMpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGZha2VJbWFnZSA9ICQoJzxpbWc+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYyA6IGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZha2VJbWFnZS5vbignbG9hZCBlcnJvcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBlcmNlbnRzKGltYWdlcy5sZW5ndGgsIHBlcmNlbnRzVG90YWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbWdzID0gaW1nUGF0aC50b0FycmF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9hZEltYWdlcyhpbWdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0oKSk7XHJcblxyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJlbG9hZGVyLmluaXQoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNLSUxMU1xyXG4gICAgdmFyIHNraWxscyA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBodG1sQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLWh0bWxcIiksXHJcbiAgICAgICAgICAgIGNzc0MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1jc3NcIiksXHJcbiAgICAgICAgICAgIGpzQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLWpzXCIpLFxyXG4gICAgICAgICAgICBwaHBDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtcGhwXCIpLFxyXG4gICAgICAgICAgICBzcWxDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtc3FsXCIpLFxyXG4gICAgICAgICAgICBub2RlanNDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtbm9kZVwiKSxcclxuICAgICAgICAgICAgbW9uZ29DID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtbW9uZ29cIiksXHJcbiAgICAgICAgICAgIGdpdEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1naXRcIiksXHJcbiAgICAgICAgICAgIGd1bHBDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtZ3VscFwiKSxcclxuICAgICAgICAgICAgYm93ZXJDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtYm93ZXJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICBtb3ZlOiBmdW5jdGlvbiAoaXRlbSwgd2luZG93U2Nyb2xsLCBwZXJjZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBpdGVtLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QZXIgPSAzMTQgKiBwZXJjZW50IC8gMTAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dTY3JvbGwgPj0gNzUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gaXRlbVBlciArICcgNzIyJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAod1Njcm9sbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGh0bWxDLCB3U2Nyb2xsLCA4MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoY3NzQywgd1Njcm9sbCwgNzApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGpzQywgd1Njcm9sbCwgNDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHBocEMsIHdTY3JvbGwsIDEwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShzcWxDLCB3U2Nyb2xsLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUobm9kZWpzQywgd1Njcm9sbCwgMjApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKG1vbmdvQywgd1Njcm9sbCwgMTUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGdpdEMsIHdTY3JvbGwsIDY1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShndWxwQywgd1Njcm9sbCwgNzUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGJvd2VyQywgd1Njcm9sbCwgODApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgdmFyIHNraWxsc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraWxscy1ncm91cFwiKTtcclxuXHJcbiAgICBpZiAoc2tpbGxzTGlzdCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gICAgICAgICAgICBwYXJhbGF4LmluaXQod1Njcm9sbCk7XHJcblxyXG4gICAgICAgICAgICBza2lsbHMuaW5pdCh3U2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuIl19
