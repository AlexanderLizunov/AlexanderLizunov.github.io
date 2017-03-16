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





                else if ($(this).scrollTop()<600){
                    $('.swipe-button__left-nav').removeClass('menu-fixed');
                    $('.fake-left-navigation').css({'display' : 'none'});
                }
            }else {
                $('.swipe-button__left-nav').removeClass('menu-fixed');
                $('.fake-left-navigation').css({'display' : 'none'});
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICB2YXIgcGFyYWxheCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJnMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXllcjEnKTtcclxuXHJcblxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtb3ZlOiBmdW5jdGlvbiAoYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyYWZlID0gd2luZG93U2Nyb2xsIC8gc3RyYWZlQW1vdW50ICsgJyUnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybVN0cmluZz0gJ3RyYW5zbGF0ZTNkKC01MCUsJytzdHJhZmUrJywwKSc7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBibG9jay5zdHlsZTtcclxuICAgICAgICAgICAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgICAgICAgICAgICAgIHN0eWxlLndlYmtpdHRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3U2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoYmcxLHdTY3JvbGwsIDQwKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA7XHJcblxyXG4gICAgfSgpKTtcclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBwYXJhbGF4LmluaXQod1Njcm9sbCk7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vTUFJTiBQQVJBTExBWFxyXG4gICAgdmFyIG1haW5QYXJhbGxheCA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBfbWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFsYXhDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxheCcpLFxyXG4gICAgICAgICAgICAgICAgbGF5ZXJzID0gcGFyYWxheENvbnRhaW5lci5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhZ2VYID0gZS5wYWdlWCxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlWSA9IGUucGFnZVksXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIHBhZ2VYLFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxZID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC0gcGFnZVk7XHJcblxyXG4gICAgICAgICAgICAgICAgW10uc2xpY2UuY2FsbChsYXllcnMpLmZvckVhY2goZnVuY3Rpb24gKGxheWVyLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvZiA9IGkgLyAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUgPSBsYXllci5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zWCA9IGluaXRpYWxYICogY29mLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NZID0gaW5pdGlhbFkgKiBjb2YsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlclBvcyA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAqIGNvZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yUG9zID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgKiBjb2YsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0ciA9ICd0cmFuc2xhdGUzZCgnICsgcG9zWCArICdweCwgJyArIHBvc1kgKyAncHgsIDApJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdHlsZS5tb3pUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdHlsZS5tc1RyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cjtcclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlLm9UcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdHlsZS5ib3R0b20gPSAnLScgKyB2ZXJQb3MgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUubGVmdCA9ICctJyArIGhvclBvcyArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdHlsZS5yaWdodCA9ICctJyArIGhvclBvcyArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluaXQ6IF9tYWluXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgdmFyIHBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXJhbGF4XCIpO1xyXG5cclxuICAgIGlmKHBhcmFsbGF4ICE9PSBudWxsKXtcclxuICAgICAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBtYWluUGFyYWxsYXguaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuIC8vLS0tLS0tLS0tLS0tLS0tLS1UYWJzXHJcblxyXG5cclxuICAgICAgICAkKCcuc2lkZWJhci1pdGVtJykub24oJ2NsaWNrJywgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzaWRlLWJhcl9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzaWRlLWJhcl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLmJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKCdoMicpLmVxKCQodGhpcykuaW5kZXgoKSkub2Zmc2V0KCkudG9wfSwgMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAvL3wgICQoJ2JvZHknKS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyAgICAgIGlmICgkKCcuYm9keScpLm9mZnNldCgpLnRvcD0gJCgnaDInKS5vZmZzZXQoKS50b3Ape1xyXG4gICAgICAgIC8vICAgICAgICBuPSQoJ2gyJykuaW5kZXgoKTtcclxuICAgICAvLyAgICAgICAgICAgJCgnc2lkZWJhci1pdGVtJykuZXEobikuYWRkQ2xhc3MoJ3NpZGUtYmFyX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NpZGUtYmFyX2FjdGl2ZScpO1xyXG4gICAgICAgLy8gICAgIH1cclxuLy9cclxuICAvLyAgICAgIH0pXHJcblxyXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEyMDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpPjQ0OCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS5zY3JvbGxUb3AoKSlcclxuICAgICAgICAgICAgICAgICAgICAkKCcuc2lkZWJhcicpLmNzcyh7J3Bvc2l0aW9uJyA6ICdmaXhlZCd9KTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuc2lkZWJhcicpLmNzcyh7J3RvcCcgOiAnMzBweCd9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykuc2Nyb2xsVG9wKCk8NDQ4KXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLnNjcm9sbFRvcCgpKVxyXG4gICAgICAgICAgICAgICAgICAgICQoJy5zaWRlYmFyJykuY3NzKHsncG9zaXRpb24nIDogJ3N0YXRpYyd9KTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuc2lkZWJhcicpLmNzcyh7J3RvcCcgOiAnMzBweCd9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKTw2MDApe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5zd2lwZS1idXR0b25fX2xlZnQtbmF2JykucmVtb3ZlQ2xhc3MoJ21lbnUtZml4ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZmFrZS1sZWZ0LW5hdmlnYXRpb24nKS5jc3MoeydkaXNwbGF5JyA6ICdub25lJ30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc3dpcGUtYnV0dG9uX19sZWZ0LW5hdicpLnJlbW92ZUNsYXNzKCdtZW51LWZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuZmFrZS1sZWZ0LW5hdmlnYXRpb24nKS5jc3MoeydkaXNwbGF5JyA6ICdub25lJ30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tU2xpZGVyXHJcblxyXG4gICAgJCgnLnNsaWRlci11cF9idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG49JCgnLnNsaWRlci1pbWFnZV9hY3RpdmUnKS5pbmRleCgpO1xyXG4gICAgICAgIHZhciBtPSQoJy5zbGlkZXItbWFpbicpLmNoaWxkcmVuKCdpbWcnKS5sZW5ndGg7XHJcbiAgICAgICAgaWYobj09bS0xKXtcclxuICAgICAgICAgICAgJCgnLnNsaWRlci1tYWluX2ltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItY29tbWVudF9ibG9jaycpLmVxKDApLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWRvd25faW1hZ2UnKS5lcShtLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEoMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG4rMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKG49PW0tMil7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItbWFpbl9pbWFnZScpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItY29tbWVudF9ibG9jaycpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItZG93bl9pbWFnZScpLmVxKG4pLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG4rMSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLW1haW5faW1hZ2UnKS5lcShuKzEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfYmxvY2snKS5lcShuKzEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWRvd25faW1hZ2UnKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLnNsaWRlci11cF9pbWFnZScpLmVxKG4rMikuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNsaWRlci1kb3duX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbj0kKCcuc2xpZGVyLWltYWdlX2FjdGl2ZScpLmluZGV4KCk7XHJcbiAgICAgICAgdmFyIG09JCgnLnNsaWRlci1tYWluJykuY2hpbGRyZW4oJ2ltZycpLmxlbmd0aDtcclxuICAgICAgICBjb25zb2xlLmxvZyhuKVxyXG4gICAgICAgIGlmKG49PTApe1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLW1haW5faW1hZ2UnKS5lcShtLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfYmxvY2snKS5lcShtLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWRvd25faW1hZ2UnKS5lcShtLTIpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgfWVsc2UgaWYobj09MSl7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyLW1haW5faW1hZ2UnKS5lcShuLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlci1jb21tZW50X2Jsb2NrJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXItZG93bl9pbWFnZScpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEobikuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXItbWFpbl9pbWFnZScpLmVxKG4tMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfYmxvY2snKS5lcShuLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlci1kb3duX2ltYWdlJykuZXEobi0yKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXItdXBfaW1hZ2UnKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLUFSUk9XIFNDUk9MTFxyXG5cclxuICAgICAgICAgICAgJCgnLnNjcm9sbC1kb3duJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAgJChkb2N1bWVudCkuaGVpZ2h0KCl9LCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICQoJy5zY3JvbGwtdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiLmJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAgMH0sJ3Nsb3cnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8tLS0tSEFNQlVSR0VSLU1FTlVcclxuICAgIHZhciBpc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICQoJy5oZWFkZXJfX21lbnVidG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgJCgnLmhhbWJ1cmdlcicpLnJlbW92ZUNsYXNzKCdidXJnZXItYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoIFwiLmhhbWJ1cmdlci1tZW51XCIgKS5mYWRlT3V0KCBcInNsb3dcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaGFtYnVyZ2VyJykuYWRkQ2xhc3MoJ2J1cmdlci1hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLmhhbWJ1cmdlci1tZW51JykuZmFkZUluKCdzbG93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNBY3RpdmUgPSAhaXNBY3RpdmU7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vLy8vL0ZGRkZMTExMTExMSUlJSVAyXHJcblxyXG5cclxuICAgIHZhciBmbGlwID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIGZsaXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsaXBwZXJcIiksXHJcbiAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbi11cFwiKTtcclxuXHJcbiAgICAgICAgdmFyIF9sb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgZmxpcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoMTgwZGVnKVwiO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBfdXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIGZsaXBwZXIuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDBkZWcpXCI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIE9uOiBfbG9naW4sXHJcbiAgICAgICAgICAgIE9mZjogX3VzZXJcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHZhciBidG5PbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbi11cFwiKSxcclxuICAgICAgICBidG5PZmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bk9mXCIpO1xyXG5cclxuICAgIGlmIChidG5PbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIGJ0bk9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZsaXAuT24oKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBidG5PZmYub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZmxpcC5PZmYoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLVBSRUxPQURFUlxyXG5cclxuICAgIHZhciBwcmVsb2FkZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcGVyY2VudHNUb3RhbCA9IDA7XHJcbiAgICAgICAgdmFyIHByZWxvYWRlciA9ICQoJy5wcmVsb2FkZXInKTtcclxuXHJcbiAgICAgICAgdmFyIGltZ1BhdGggPSAkKCcqJykubWFwKGZ1bmN0aW9uIChuZHgsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIGJhY2tncm91bmQgPSAkKGVsZW1lbnQpLmNzcygnYmFja2dyb3VuZC1pbWFnZScpO1xyXG4gICAgICAgICAgICB2YXIgaXNJbWcgPSAkKGVsZW1lbnQpLmlzKCdpbWcnKTtcclxuICAgICAgICAgICAgdmFyIHBhdGggPSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kICE9ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IGJhY2tncm91bmQucmVwbGFjZSgndXJsKFwiJywgJycpLnJlcGxhY2UoJ1wiKScsICcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzSW1nKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gJChlbGVtZW50KS5hdHRyKCdzcmMnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHBhdGgpIHJldHVybiBwYXRoO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgc2V0UGVyY2VudHMgPSBmdW5jdGlvbih0b3RhbCwgY3VycmVudCkge1xyXG4gICAgICAgICAgICB2YXIgcGVyY2VudHMgPSBNYXRoLmNlaWwoY3VycmVudCAvIHRvdGFsICogMTAwKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5wcmVsb2FkZXJfX3BlcmNlbnRzJykudGV4dChwZXJjZW50cyArICclJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGVyY2VudHMgPj0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbG9hZEltYWdlcyA9IGZ1bmN0aW9uKGltYWdlcykge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpbWFnZXMubGVuZ3RoKSBwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG5cclxuICAgICAgICAgICAgaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24oaW1nLCBpLCBpbWFnZXMpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGZha2VJbWFnZSA9ICQoJzxpbWc+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYyA6IGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZha2VJbWFnZS5vbignbG9hZCBlcnJvcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBlcmNlbnRzKGltYWdlcy5sZW5ndGgsIHBlcmNlbnRzVG90YWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbWdzID0gaW1nUGF0aC50b0FycmF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9hZEltYWdlcyhpbWdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0oKSk7XHJcblxyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJlbG9hZGVyLmluaXQoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNLSUxMU1xyXG4gICAgdmFyIHNraWxscyA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBodG1sQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLWh0bWxcIiksXHJcbiAgICAgICAgICAgIGNzc0MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1jc3NcIiksXHJcbiAgICAgICAgICAgIGpzQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLWpzXCIpLFxyXG4gICAgICAgICAgICBwaHBDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtcGhwXCIpLFxyXG4gICAgICAgICAgICBzcWxDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtc3FsXCIpLFxyXG4gICAgICAgICAgICBub2RlanNDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtbm9kZVwiKSxcclxuICAgICAgICAgICAgbW9uZ29DID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtbW9uZ29cIiksXHJcbiAgICAgICAgICAgIGdpdEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1naXRcIiksXHJcbiAgICAgICAgICAgIGd1bHBDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtZ3VscFwiKSxcclxuICAgICAgICAgICAgYm93ZXJDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtYm93ZXJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICBtb3ZlOiBmdW5jdGlvbiAoaXRlbSwgd2luZG93U2Nyb2xsLCBwZXJjZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBpdGVtLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QZXIgPSAzMTQgKiBwZXJjZW50IC8gMTAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dTY3JvbGwgPj0gNzUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gaXRlbVBlciArICcgNzIyJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAod1Njcm9sbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGh0bWxDLCB3U2Nyb2xsLCA4MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoY3NzQywgd1Njcm9sbCwgNzApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGpzQywgd1Njcm9sbCwgNDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHBocEMsIHdTY3JvbGwsIDEwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShzcWxDLCB3U2Nyb2xsLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUobm9kZWpzQywgd1Njcm9sbCwgMjApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKG1vbmdvQywgd1Njcm9sbCwgMTUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGdpdEMsIHdTY3JvbGwsIDY1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShndWxwQywgd1Njcm9sbCwgNzUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGJvd2VyQywgd1Njcm9sbCwgODApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgdmFyIHNraWxsc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraWxscy1ncm91cFwiKTtcclxuXHJcbiAgICBpZiAoc2tpbGxzTGlzdCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gICAgICAgICAgICBwYXJhbGF4LmluaXQod1Njcm9sbCk7XHJcblxyXG4gICAgICAgICAgICBza2lsbHMuaW5pdCh3U2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRNYXAgKCkge1xyXG4gICAgICAgIHZhciBwb2ludGVyID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg0Ny44ODgzMzYsIDM1LjA2NDg0MiksXHJcbiAgICAgICAgICAgIGNlbnRlciA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDcuODc1Mjk2LCAzNS4wODA1OTgpO1xyXG5cclxuICAgICAgICB2YXIgc3R5bGVzID0gW3tcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZVwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0LmZpbGxcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiM0NDQ0NDRcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwibGFuZHNjYXBlXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjZjJmMmYyXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInBvaVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvblwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInNhdHVyYXRpb25cIjotMTAwfSx7XCJsaWdodG5lc3NcIjo0NX1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZC5oaWdod2F5XCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcInNpbXBsaWZpZWRcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZC5hcnRlcmlhbFwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy5pY29uXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9mZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJ0cmFuc2l0XCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9mZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJ3YXRlclwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiIzAwNGNkMVwifSx7XCJ2aXNpYmlsaXR5XCI6XCJvblwifV19XTtcclxuXHJcbiAgICAgICAgdmFyIHN0eWxlZE1hcCA9IG5ldyBnb29nbGUubWFwcy5TdHlsZWRNYXBUeXBlKHN0eWxlcyxcclxuICAgICAgICAgICAge25hbWU6IFwiU3R5bGVkIE1hcFwifSk7XHJcblxyXG4gICAgICAgIHZhciBtYXBTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgY2VudGVyOiBjZW50ZXIsXHJcbiAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuICAgICAgICAgICAgem9vbTogMTQuNSxcclxuICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2xPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBtYXBUeXBlSWRzOiBbZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsICdtYXBfc3R5bGUnXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB6b29tQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICAgICAgem9vbUNvbnRyb2xPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uLlJJR0hUX1RPUFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIG1hcFNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICBpY29uOiAnYXNzZXRzL2ltZy9tYXJrZXIucG5nJyxcclxuICAgICAgICAgICAgcG9zaXRpb246IHBvaW50ZXIsXHJcbiAgICAgICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJJJ20gaGVyZSFcIixcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uQk9VTkNFXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1hcC5tYXBUeXBlcy5zZXQoJ21hcF9zdHlsZScsIHN0eWxlZE1hcCk7XHJcbiAgICAgICAgbWFwLnNldE1hcFR5cGVJZCgnbWFwX3N0eWxlJyk7XHJcbiAgICB9O1xyXG5cclxuIl19
