    var paralax = (function () {
        var bg1 = document.querySelector('.layer1');



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


        $('.sidebar-item').on('click',  function() {
            $(this).addClass('side-bar_active').siblings().removeClass('side-bar_active');
            $('.body').animate({ scrollTop: $('h2').eq($(this).index()).offset().top}, 1000);

                });
    //|  $('body').on('scroll', function () {
      //      if ($('.body').offset().top= $('h2').offset().top){
        //        n=$('h2').index();
     //           $('sidebar-item').eq(n).addClass('side-bar_active').siblings().removeClass('side-bar_active');
       //     }
//
  //      })

        $(window).scroll(function(){
            if (window.innerWidth >= 1200) {

                if($(this).scrollTop()>448){
                    console.log($(this).scrollTop())
                    $('.sidebar').css({'position' : 'fixed'});
                    $('.sidebar').css({'top' : '30px'});
                }
                if($(this).scrollTop()<448){
                    console.log($(this).scrollTop())
                    $('.sidebar').css({'position' : 'static'});
                    $('.sidebar').css({'top' : '30px'});
                }

            } else {$('.sidebar').css({'top' : '0px'});
            }
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

    $('.scroll-up').on('click', function() {
        $(".body").animate({scrollTop:  0},'slow');
        return false;
    });


    //----HAMBURGER-MENU
    var isActive = false;

    $('.header__menubtn').on('click', function() {
        if (isActive) {
            $('.hamburger').removeClass('burger-active');
            $( ".hamburger-menu" ).fadeOut( "slow", function() {
                    // Animation complete
               
            });
        } else {
            $('.hamburger').addClass('burger-active');
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







    function initMap () {
        var pointer = new google.maps.LatLng(47.888336, 35.064842),
            center = new google.maps.LatLng(47.875296, 35.080598);

        var styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#004cd1"},{"visibility":"on"}]}];

        var styledMap = new google.maps.StyledMapType(styles,
            {name: "Styled Map"});

        var mapSettings = {
            center: center,
            scrollwheel: false,
            zoom: 14.5,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            },
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            streetViewControl: false
        };

        var map = new google.maps.Map(document.getElementById('map'), mapSettings);

        var marker = new google.maps.Marker({
            icon: 'assets/img/marker.png',
            position: pointer,
            map: map,
            title: "I'm here!",
            animation: google.maps.Animation.BOUNCE
        });

        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
    };


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgdmFyIHBhcmFsYXggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBiZzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF5ZXIxJyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbW92ZTogZnVuY3Rpb24gKGJsb2NrLCB3aW5kb3dTY3JvbGwsIHN0cmFmZUFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0cmFmZSA9IHdpbmRvd1Njcm9sbCAvIHN0cmFmZUFtb3VudCArICclJztcclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1TdHJpbmc9ICd0cmFuc2xhdGUzZCgtNTAlLCcrc3RyYWZlKycsMCknO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gYmxvY2suc3R5bGU7XHJcbiAgICAgICAgICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBzdHlsZS53ZWJraXR0cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAod1Njcm9sbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGJnMSx3U2Nyb2xsLCA0MCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgO1xyXG5cclxuICAgIH0oKSk7XHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgcGFyYWxheC5pbml0KHdTY3JvbGwpO1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvL01BSU4gUEFSQUxMQVhcclxuICAgIHZhciBtYWluUGFyYWxsYXggPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgX21haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbGF4Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsYXgnKSxcclxuICAgICAgICAgICAgICAgIGxheWVycyA9IHBhcmFsYXhDb250YWluZXIuY2hpbGRyZW47XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYWdlWCA9IGUucGFnZVgsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVkgPSBlLnBhZ2VZLFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxYID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLSBwYWdlWCxcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIHBhZ2VZO1xyXG5cclxuICAgICAgICAgICAgICAgIFtdLnNsaWNlLmNhbGwobGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChsYXllciwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2YgPSBpIC8gMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlID0gbGF5ZXIuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1ggPSBpbml0aWFsWCAqIGNvZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWSA9IGluaXRpYWxZICogY29mLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJQb3MgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgKiBjb2YsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvclBvcyA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpICogY29mLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHIgPSAndHJhbnNsYXRlM2QoJyArIHBvc1ggKyAncHgsICcgKyBwb3NZICsgJ3B4LCAwKSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUubW96VHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdHlsZS5vVHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUuYm90dG9tID0gJy0nICsgdmVyUG9zICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlLmxlZnQgPSAnLScgKyBob3JQb3MgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUucmlnaHQgPSAnLScgKyBob3JQb3MgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbml0OiBfbWFpblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHZhciBwYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFyYWxheFwiKTtcclxuXHJcbiAgICBpZihwYXJhbGxheCAhPT0gbnVsbCl7XHJcbiAgICAgICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbWFpblBhcmFsbGF4LmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAvLy0tLS0tLS0tLS0tLS0tLS0tVGFic1xyXG5cclxuXHJcbiAgICAgICAgJCgnLnNpZGViYXItaXRlbScpLm9uKCdjbGljaycsICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2lkZS1iYXJfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2lkZS1iYXJfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5ib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJCgnaDInKS5lcSgkKHRoaXMpLmluZGV4KCkpLm9mZnNldCgpLnRvcH0sIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgLy98ICAkKCdib2R5Jykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gICAgICBpZiAoJCgnLmJvZHknKS5vZmZzZXQoKS50b3A9ICQoJ2gyJykub2Zmc2V0KCkudG9wKXtcclxuICAgICAgICAvLyAgICAgICAgbj0kKCdoMicpLmluZGV4KCk7XHJcbiAgICAgLy8gICAgICAgICAgICQoJ3NpZGViYXItaXRlbScpLmVxKG4pLmFkZENsYXNzKCdzaWRlLWJhcl9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzaWRlLWJhcl9hY3RpdmUnKTtcclxuICAgICAgIC8vICAgICB9XHJcbi8vXHJcbiAgLy8gICAgICB9KVxyXG5cclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMjAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKT40NDgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuc2Nyb2xsVG9wKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNpZGViYXInKS5jc3Moeydwb3NpdGlvbicgOiAnZml4ZWQnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNpZGViYXInKS5jc3Moeyd0b3AnIDogJzMwcHgnfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpPDQ0OCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS5zY3JvbGxUb3AoKSlcclxuICAgICAgICAgICAgICAgICAgICAkKCcuc2lkZWJhcicpLmNzcyh7J3Bvc2l0aW9uJyA6ICdzdGF0aWMnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNpZGViYXInKS5jc3Moeyd0b3AnIDogJzMwcHgnfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgeyQoJy5zaWRlYmFyJykuY3NzKHsndG9wJyA6ICcwcHgnfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS1TbGlkZXJcclxuXHJcbiAgICAkKCcuc2xpZGVyLXVwX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbj0kKCcuc2xpZGVyLWltYWdlX2FjdGl2ZScpLmluZGV4KCk7XHJcbiAgICAgICAgdmFyIG09JCgnLnNsaWRlci1tYWluJykuY2hpbGRyZW4oJ2ltZycpLmxlbmd0aDtcclxuICAgICAgICBpZihuPT1tLTEpe1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLW1haW5faW1hZ2UnKS5lcSgwKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLnNsaWRlci1jb21tZW50X2Jsb2NrJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItZG93bl9pbWFnZScpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItdXBfaW1hZ2UnKS5lcSgxKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobisxKTtcclxuICAgICAgICB9IGVsc2UgaWYobj09bS0yKXtcclxuICAgICAgICAgICAgJCgnLnNsaWRlci1tYWluX2ltYWdlJykuZXEobisxKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLnNsaWRlci1jb21tZW50X2Jsb2NrJykuZXEobisxKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLnNsaWRlci1kb3duX2ltYWdlJykuZXEobikuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItdXBfaW1hZ2UnKS5lcSgwKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobisxKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItbWFpbl9pbWFnZScpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItY29tbWVudF9ibG9jaycpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItZG93bl9pbWFnZScpLmVxKG4pLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEobisyKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc2xpZGVyLWRvd25fYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBuPSQoJy5zbGlkZXItaW1hZ2VfYWN0aXZlJykuaW5kZXgoKTtcclxuICAgICAgICB2YXIgbT0kKCcuc2xpZGVyLW1haW4nKS5jaGlsZHJlbignaW1nJykubGVuZ3RoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG4pXHJcbiAgICAgICAgaWYobj09MCl7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItbWFpbl9pbWFnZScpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItY29tbWVudF9ibG9jaycpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItZG93bl9pbWFnZScpLmVxKG0tMikuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItdXBfaW1hZ2UnKS5lcSgwKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICB9ZWxzZSBpZihuPT0xKXtcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXItbWFpbl9pbWFnZScpLmVxKG4tMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfYmxvY2snKS5lcShuLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlci1kb3duX2ltYWdlJykuZXEobS0xKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXItdXBfaW1hZ2UnKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlci1tYWluX2ltYWdlJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXItY29tbWVudF9ibG9jaycpLmVxKG4tMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyLWRvd25faW1hZ2UnKS5lcShuLTIpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlci11cF9pbWFnZScpLmVxKG4pLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tQVJST1cgU0NST0xMXHJcblxyXG4gICAgICAgICAgICAkKCcuc2Nyb2xsLWRvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6ICAkKGRvY3VtZW50KS5oZWlnaHQoKX0sJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgJCgnLnNjcm9sbC11cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIuYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6ICAwfSwnc2xvdycpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLy0tLS1IQU1CVVJHRVItTUVOVVxyXG4gICAgdmFyIGlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgJCgnLmhlYWRlcl9fbWVudWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAkKCcuaGFtYnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ2J1cmdlci1hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCggXCIuaGFtYnVyZ2VyLW1lbnVcIiApLmZhZGVPdXQoIFwic2xvd1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBbmltYXRpb24gY29tcGxldGVcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5oYW1idXJnZXInKS5hZGRDbGFzcygnYnVyZ2VyLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuaGFtYnVyZ2VyLW1lbnUnKS5mYWRlSW4oJ3Nsb3cnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpc0FjdGl2ZSA9ICFpc0FjdGl2ZTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy8vLy8vRkZGRkxMTExMTExJSUlJUDJcclxuXHJcblxyXG4gICAgdmFyIGZsaXAgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgZmxpcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmxpcHBlclwiKSxcclxuICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWduLXVwXCIpO1xyXG5cclxuICAgICAgICB2YXIgX2xvZ2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBidG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBmbGlwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgxODBkZWcpXCI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIF91c2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBidG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgZmxpcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoMGRlZylcIjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgT246IF9sb2dpbixcclxuICAgICAgICAgICAgT2ZmOiBfdXNlclxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgdmFyIGJ0bk9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWduLXVwXCIpLFxyXG4gICAgICAgIGJ0bk9mZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuT2ZcIik7XHJcblxyXG4gICAgaWYgKGJ0bk9uICE9PSBudWxsKSB7XHJcbiAgICAgICAgYnRuT24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZmxpcC5PbigpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGJ0bk9mZi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmbGlwLk9mZigpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tUFJFTE9BREVSXHJcblxyXG4gICAgdmFyIHByZWxvYWRlciA9IChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBwZXJjZW50c1RvdGFsID0gMDtcclxuICAgICAgICB2YXIgcHJlbG9hZGVyID0gJCgnLnByZWxvYWRlcicpO1xyXG5cclxuICAgICAgICB2YXIgaW1nUGF0aCA9ICQoJyonKS5tYXAoZnVuY3Rpb24gKG5keCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgYmFja2dyb3VuZCA9ICQoZWxlbWVudCkuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyk7XHJcbiAgICAgICAgICAgIHZhciBpc0ltZyA9ICQoZWxlbWVudCkuaXMoJ2ltZycpO1xyXG4gICAgICAgICAgICB2YXIgcGF0aCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhY2tncm91bmQgIT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gYmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNJbWcpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSAkKGVsZW1lbnQpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocGF0aCkgcmV0dXJuIHBhdGg7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBzZXRQZXJjZW50cyA9IGZ1bmN0aW9uKHRvdGFsLCBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBwZXJjZW50cyA9IE1hdGguY2VpbChjdXJyZW50IC8gdG90YWwgKiAxMDApO1xyXG5cclxuICAgICAgICAgICAgJCgnLnByZWxvYWRlcl9fcGVyY2VudHMnKS50ZXh0KHBlcmNlbnRzICsgJyUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwZXJjZW50cyA+PSAxMDApIHtcclxuICAgICAgICAgICAgICAgIHByZWxvYWRlci5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsb2FkSW1hZ2VzID0gZnVuY3Rpb24oaW1hZ2VzKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWltYWdlcy5sZW5ndGgpIHByZWxvYWRlci5mYWRlT3V0KCk7XHJcblxyXG4gICAgICAgICAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbihpbWcsIGksIGltYWdlcyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmFrZUltYWdlID0gJCgnPGltZz4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ciA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjIDogaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZmFrZUltYWdlLm9uKCdsb2FkIGVycm9yJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50c1RvdGFsKys7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGVyY2VudHMoaW1hZ2VzLmxlbmd0aCwgcGVyY2VudHNUb3RhbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGltZ3MgPSBpbWdQYXRoLnRvQXJyYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2FkSW1hZ2VzKGltZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSgpKTtcclxuXHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcmVsb2FkZXIuaW5pdCgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0tJTExTXHJcbiAgICB2YXIgc2tpbGxzID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIGh0bWxDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtaHRtbFwiKSxcclxuICAgICAgICAgICAgY3NzQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLWNzc1wiKSxcclxuICAgICAgICAgICAganNDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtanNcIiksXHJcbiAgICAgICAgICAgIHBocEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1waHBcIiksXHJcbiAgICAgICAgICAgIHNxbEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1zcWxcIiksXHJcbiAgICAgICAgICAgIG5vZGVqc0MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1ub2RlXCIpLFxyXG4gICAgICAgICAgICBtb25nb0MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1tb25nb1wiKSxcclxuICAgICAgICAgICAgZ2l0QyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLWdpdFwiKSxcclxuICAgICAgICAgICAgZ3VscEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1ndWxwXCIpLFxyXG4gICAgICAgICAgICBib3dlckMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1ib3dlclwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIG1vdmU6IGZ1bmN0aW9uIChpdGVtLCB3aW5kb3dTY3JvbGwsIHBlcmNlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGl0ZW0uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBlciA9IDMxNCAqIHBlcmNlbnQgLyAxMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd1Njcm9sbCA+PSA3NTApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBpdGVtUGVyICsgJyA3MjInO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3U2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoaHRtbEMsIHdTY3JvbGwsIDgwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShjc3NDLCB3U2Nyb2xsLCA3MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoanNDLCB3U2Nyb2xsLCA0MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUocGhwQywgd1Njcm9sbCwgMTApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHNxbEMsIHdTY3JvbGwsIDEwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShub2RlanNDLCB3U2Nyb2xsLCAyMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUobW9uZ29DLCB3U2Nyb2xsLCAxNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoZ2l0Qywgd1Njcm9sbCwgNjUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGd1bHBDLCB3U2Nyb2xsLCA3NSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoYm93ZXJDLCB3U2Nyb2xsLCA4MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICB2YXIgc2tpbGxzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2tpbGxzLWdyb3VwXCIpO1xyXG5cclxuICAgIGlmIChza2lsbHNMaXN0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcbiAgICAgICAgICAgIHBhcmFsYXguaW5pdCh3U2Nyb2xsKTtcclxuXHJcbiAgICAgICAgICAgIHNraWxscy5pbml0KHdTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE1hcCAoKSB7XHJcbiAgICAgICAgdmFyIHBvaW50ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQ3Ljg4ODMzNiwgMzUuMDY0ODQyKSxcclxuICAgICAgICAgICAgY2VudGVyID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg0Ny44NzUyOTYsIDM1LjA4MDU5OCk7XHJcblxyXG4gICAgICAgIHZhciBzdHlsZXMgPSBbe1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLnRleHQuZmlsbFwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiIzQ0NDQ0NFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJsYW5kc2NhcGVcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiNmMmYyZjJcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicG9pXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWRcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wic2F0dXJhdGlvblwiOi0xMDB9LHtcImxpZ2h0bmVzc1wiOjQ1fV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmhpZ2h3YXlcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwic2ltcGxpZmllZFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmFydGVyaWFsXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLmljb25cIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInRyYW5zaXRcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcIndhdGVyXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjMDA0Y2QxXCJ9LHtcInZpc2liaWxpdHlcIjpcIm9uXCJ9XX1dO1xyXG5cclxuICAgICAgICB2YXIgc3R5bGVkTWFwID0gbmV3IGdvb2dsZS5tYXBzLlN0eWxlZE1hcFR5cGUoc3R5bGVzLFxyXG4gICAgICAgICAgICB7bmFtZTogXCJTdHlsZWQgTWFwXCJ9KTtcclxuXHJcbiAgICAgICAgdmFyIG1hcFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBjZW50ZXI6IGNlbnRlcixcclxuICAgICAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICB6b29tOiAxNC41LFxyXG4gICAgICAgICAgICBtYXBUeXBlQ29udHJvbE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIG1hcFR5cGVJZHM6IFtnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCwgJ21hcF9zdHlsZSddXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHpvb21Db250cm9sOiB0cnVlLFxyXG4gICAgICAgICAgICB6b29tQ29udHJvbE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24uUklHSFRfVE9QXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwgbWFwU2V0dGluZ3MpO1xyXG5cclxuICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgIGljb246ICdhc3NldHMvaW1nL21hcmtlci5wbmcnLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogcG9pbnRlcixcclxuICAgICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkknbSBoZXJlIVwiLFxyXG4gICAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5CT1VOQ0VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWFwLm1hcFR5cGVzLnNldCgnbWFwX3N0eWxlJywgc3R5bGVkTWFwKTtcclxuICAgICAgICBtYXAuc2V0TWFwVHlwZUlkKCdtYXBfc3R5bGUnKTtcclxuICAgIH07XHJcblxyXG4iXX0=
