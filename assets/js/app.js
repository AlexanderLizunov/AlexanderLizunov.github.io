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

        var styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#4369aa"},{"visibility":"on"}]}];
        var styledMap = new google.maps.StyledMapType(styles,
            {name: "Styled Map"});

        var mapSettings = {
            center: center,
            scrollwheel: false,
            zoom: 15,
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
    }

//--------------------------FORM AUTHORISATION
    $('.login-field').on('focus', function () {
        $('.login-field').siblings().css('fill' , '#c4cbcd');
        $(this).siblings().css('fill' , '#004cd1');
        $('.input-error__msg').css('display' , 'none');


    });




    $('#form-enter').on('click', function () {
        var login= $('#user-name').val();
        var password= $('#user-password').val();
        if (login=="") {
            console.log('условие 1');
            if (password==''){
                console.log('b то и др');
                $('.input-error__msg').eq(2).css('display' , 'inline-block');
                $('.login-ico').css('fill' , 'red')
            } else{
                $('.input-error__msg').eq(0).css('display' , 'inline-block');
                $('#user-name').siblings().css('fill', 'red')
            }
        } else{
            if (password==''){
                $('.input-error__msg').eq(1).css('display' , 'inline-block');
                $('#user-password').siblings().css('fill', 'red')
            } else{
                if(($('#human-check1').prop('checked')==true) && ($('#human-check-yes').prop('checked')==true)) {
                    alert( 'Авторизация завершена')
                } else {alert('Роботам здесь не место')}
            }
        }
    })




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIHZhciBwYXJhbGF4ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYmcxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxheWVyMScpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1vdmU6IGZ1bmN0aW9uIChibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyBzdHJhZmVBbW91bnQgKyAnJSc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNmb3JtU3RyaW5nPSAndHJhbnNsYXRlM2QoLTUwJSwnK3N0cmFmZSsnLDApJztcclxuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGJsb2NrLnN0eWxlO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUud2Via2l0dHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdTY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShiZzEsd1Njcm9sbCwgNDApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICB9KCkpO1xyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIHBhcmFsYXguaW5pdCh3U2Nyb2xsKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy9NQUlOIFBBUkFMTEFYXHJcbiAgICB2YXIgbWFpblBhcmFsbGF4ID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIF9tYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcGFyYWxheENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbGF4JyksXHJcbiAgICAgICAgICAgICAgICBsYXllcnMgPSBwYXJhbGF4Q29udGFpbmVyLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFnZVggPSBlLnBhZ2VYLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VZID0gZS5wYWdlWSxcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC0gcGFnZVgsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgLSBwYWdlWTtcclxuXHJcbiAgICAgICAgICAgICAgICBbXS5zbGljZS5jYWxsKGxheWVycykuZm9yRWFjaChmdW5jdGlvbiAobGF5ZXIsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29mID0gaSAvIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdHlsZSA9IGxheWVyLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NYID0gaW5pdGlhbFggKiBjb2YsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc1kgPSBpbml0aWFsWSAqIGNvZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyUG9zID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpICogY29mLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JQb3MgPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAqIGNvZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RyID0gJ3RyYW5zbGF0ZTNkKCcgKyBwb3NYICsgJ3B4LCAnICsgcG9zWSArICdweCwgMCknO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cjtcclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlLm1velRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cjtcclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUub1RyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cjtcclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlLmJvdHRvbSA9ICctJyArIHZlclBvcyArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdHlsZS5sZWZ0ID0gJy0nICsgaG9yUG9zICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlLnJpZ2h0ID0gJy0nICsgaG9yUG9zICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5pdDogX21haW5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICB2YXIgcGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhcmFsYXhcIik7XHJcblxyXG4gICAgaWYocGFyYWxsYXggIT09IG51bGwpe1xyXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1haW5QYXJhbGxheC5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gLy8tLS0tLS0tLS0tLS0tLS0tLVRhYnNcclxuXHJcblxyXG4gICAgICAgICQoJy5zaWRlYmFyLWl0ZW0nKS5vbignY2xpY2snLCAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NpZGUtYmFyX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NpZGUtYmFyX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoJ2gyJykuZXEoJCh0aGlzKS5pbmRleCgpKS5vZmZzZXQoKS50b3B9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIC8vfCAgJCgnYm9keScpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vICAgICAgaWYgKCQoJy5ib2R5Jykub2Zmc2V0KCkudG9wPSAkKCdoMicpLm9mZnNldCgpLnRvcCl7XHJcbiAgICAgICAgLy8gICAgICAgIG49JCgnaDInKS5pbmRleCgpO1xyXG4gICAgIC8vICAgICAgICAgICAkKCdzaWRlYmFyLWl0ZW0nKS5lcShuKS5hZGRDbGFzcygnc2lkZS1iYXJfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2lkZS1iYXJfYWN0aXZlJyk7XHJcbiAgICAgICAvLyAgICAgfVxyXG4vL1xyXG4gIC8vICAgICAgfSlcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykuc2Nyb2xsVG9wKCk+NDQ4KXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLnNjcm9sbFRvcCgpKVxyXG4gICAgICAgICAgICAgICAgICAgICQoJy5zaWRlYmFyJykuY3NzKHsncG9zaXRpb24nIDogJ2ZpeGVkJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5zaWRlYmFyJykuY3NzKHsndG9wJyA6ICczMHB4J30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKTw0NDgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuc2Nyb2xsVG9wKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNpZGViYXInKS5jc3Moeydwb3NpdGlvbicgOiAnc3RhdGljJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5zaWRlYmFyJykuY3NzKHsndG9wJyA6ICczMHB4J30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHskKCcuc2lkZWJhcicpLmNzcyh7J3RvcCcgOiAnMHB4J30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tU2xpZGVyXHJcblxyXG4gICAgJCgnLnNsaWRlci11cF9idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG49JCgnLnNsaWRlci1pbWFnZV9hY3RpdmUnKS5pbmRleCgpO1xyXG4gICAgICAgIHZhciBtPSQoJy5zbGlkZXItbWFpbicpLmNoaWxkcmVuKCdpbWcnKS5sZW5ndGg7XHJcbiAgICAgICAgaWYobj09bS0xKXtcclxuICAgICAgICAgICAgJCgnLnNsaWRlci1tYWluX2ltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItY29tbWVudF9ibG9jaycpLmVxKDApLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWRvd25faW1hZ2UnKS5lcShtLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEoMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG4rMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKG49PW0tMil7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItbWFpbl9pbWFnZScpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItY29tbWVudF9ibG9jaycpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zbGlkZXItZG93bl9pbWFnZScpLmVxKG4pLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG4rMSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLW1haW5faW1hZ2UnKS5lcShuKzEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfYmxvY2snKS5lcShuKzEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWRvd25faW1hZ2UnKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLnNsaWRlci11cF9pbWFnZScpLmVxKG4rMikuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNsaWRlci1kb3duX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbj0kKCcuc2xpZGVyLWltYWdlX2FjdGl2ZScpLmluZGV4KCk7XHJcbiAgICAgICAgdmFyIG09JCgnLnNsaWRlci1tYWluJykuY2hpbGRyZW4oJ2ltZycpLmxlbmd0aDtcclxuICAgICAgICBjb25zb2xlLmxvZyhuKVxyXG4gICAgICAgIGlmKG49PTApe1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLW1haW5faW1hZ2UnKS5lcShtLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfYmxvY2snKS5lcShtLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLWRvd25faW1hZ2UnKS5lcShtLTIpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgfWVsc2UgaWYobj09MSl7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyLW1haW5faW1hZ2UnKS5lcShuLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlci1jb21tZW50X2Jsb2NrJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXItZG93bl9pbWFnZScpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyLXVwX2ltYWdlJykuZXEobikuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXItbWFpbl9pbWFnZScpLmVxKG4tMSkuYWRkQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfYmxvY2snKS5lcShuLTEpLmFkZENsYXNzKCdzbGlkZXItaW1hZ2VfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlci1kb3duX2ltYWdlJykuZXEobi0yKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5zbGlkZXItdXBfaW1hZ2UnKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyLWltYWdlX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlci1pbWFnZV9hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLUFSUk9XIFNDUk9MTFxyXG5cclxuICAgICAgICAgICAgJCgnLnNjcm9sbC1kb3duJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAgJChkb2N1bWVudCkuaGVpZ2h0KCl9LCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICQoJy5zY3JvbGwtdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiLmJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAgMH0sJ3Nsb3cnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8tLS0tSEFNQlVSR0VSLU1FTlVcclxuICAgIHZhciBpc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICQoJy5oZWFkZXJfX21lbnVidG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgJCgnLmhhbWJ1cmdlcicpLnJlbW92ZUNsYXNzKCdidXJnZXItYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoIFwiLmhhbWJ1cmdlci1tZW51XCIgKS5mYWRlT3V0KCBcInNsb3dcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQW5pbWF0aW9uIGNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaGFtYnVyZ2VyJykuYWRkQ2xhc3MoJ2J1cmdlci1hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLmhhbWJ1cmdlci1tZW51JykuZmFkZUluKCdzbG93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNBY3RpdmUgPSAhaXNBY3RpdmU7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vLy8vL0ZGRkZMTExMTExMSUlJSVAyXHJcblxyXG5cclxuICAgIHZhciBmbGlwID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIGZsaXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsaXBwZXJcIiksXHJcbiAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbi11cFwiKTtcclxuXHJcbiAgICAgICAgdmFyIF9sb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgZmxpcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoMTgwZGVnKVwiO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBfdXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIGZsaXBwZXIuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDBkZWcpXCI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIE9uOiBfbG9naW4sXHJcbiAgICAgICAgICAgIE9mZjogX3VzZXJcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHZhciBidG5PbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbi11cFwiKSxcclxuICAgICAgICBidG5PZmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bk9mXCIpO1xyXG5cclxuICAgIGlmIChidG5PbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIGJ0bk9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZsaXAuT24oKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBidG5PZmYub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZmxpcC5PZmYoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLVBSRUxPQURFUlxyXG5cclxuICAgIHZhciBwcmVsb2FkZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcGVyY2VudHNUb3RhbCA9IDA7XHJcbiAgICAgICAgdmFyIHByZWxvYWRlciA9ICQoJy5wcmVsb2FkZXInKTtcclxuXHJcbiAgICAgICAgdmFyIGltZ1BhdGggPSAkKCcqJykubWFwKGZ1bmN0aW9uIChuZHgsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIGJhY2tncm91bmQgPSAkKGVsZW1lbnQpLmNzcygnYmFja2dyb3VuZC1pbWFnZScpO1xyXG4gICAgICAgICAgICB2YXIgaXNJbWcgPSAkKGVsZW1lbnQpLmlzKCdpbWcnKTtcclxuICAgICAgICAgICAgdmFyIHBhdGggPSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kICE9ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IGJhY2tncm91bmQucmVwbGFjZSgndXJsKFwiJywgJycpLnJlcGxhY2UoJ1wiKScsICcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzSW1nKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gJChlbGVtZW50KS5hdHRyKCdzcmMnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHBhdGgpIHJldHVybiBwYXRoO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgc2V0UGVyY2VudHMgPSBmdW5jdGlvbih0b3RhbCwgY3VycmVudCkge1xyXG4gICAgICAgICAgICB2YXIgcGVyY2VudHMgPSBNYXRoLmNlaWwoY3VycmVudCAvIHRvdGFsICogMTAwKTtcclxuXHJcbiAgICAgICAgICAgICQoJy5wcmVsb2FkZXJfX3BlcmNlbnRzJykudGV4dChwZXJjZW50cyArICclJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGVyY2VudHMgPj0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbG9hZEltYWdlcyA9IGZ1bmN0aW9uKGltYWdlcykge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpbWFnZXMubGVuZ3RoKSBwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG5cclxuICAgICAgICAgICAgaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24oaW1nLCBpLCBpbWFnZXMpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGZha2VJbWFnZSA9ICQoJzxpbWc+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYyA6IGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZha2VJbWFnZS5vbignbG9hZCBlcnJvcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBlcmNlbnRzKGltYWdlcy5sZW5ndGgsIHBlcmNlbnRzVG90YWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbWdzID0gaW1nUGF0aC50b0FycmF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9hZEltYWdlcyhpbWdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0oKSk7XHJcblxyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJlbG9hZGVyLmluaXQoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNLSUxMU1xyXG4gICAgdmFyIHNraWxscyA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBodG1sQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLWh0bWxcIiksXHJcbiAgICAgICAgICAgIGNzc0MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1jc3NcIiksXHJcbiAgICAgICAgICAgIGpzQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlLWpzXCIpLFxyXG4gICAgICAgICAgICBwaHBDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtcGhwXCIpLFxyXG4gICAgICAgICAgICBzcWxDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtc3FsXCIpLFxyXG4gICAgICAgICAgICBub2RlanNDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtbm9kZVwiKSxcclxuICAgICAgICAgICAgbW9uZ29DID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtbW9uZ29cIiksXHJcbiAgICAgICAgICAgIGdpdEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZS1naXRcIiksXHJcbiAgICAgICAgICAgIGd1bHBDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtZ3VscFwiKSxcclxuICAgICAgICAgICAgYm93ZXJDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjbGUtYm93ZXJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICBtb3ZlOiBmdW5jdGlvbiAoaXRlbSwgd2luZG93U2Nyb2xsLCBwZXJjZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBpdGVtLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QZXIgPSAzMTQgKiBwZXJjZW50IC8gMTAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dTY3JvbGwgPj0gNzUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gaXRlbVBlciArICcgNzIyJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAod1Njcm9sbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGh0bWxDLCB3U2Nyb2xsLCA4MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoY3NzQywgd1Njcm9sbCwgNzApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGpzQywgd1Njcm9sbCwgNDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHBocEMsIHdTY3JvbGwsIDEwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShzcWxDLCB3U2Nyb2xsLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUobm9kZWpzQywgd1Njcm9sbCwgMjApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKG1vbmdvQywgd1Njcm9sbCwgMTUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGdpdEMsIHdTY3JvbGwsIDY1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZShndWxwQywgd1Njcm9sbCwgNzUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGJvd2VyQywgd1Njcm9sbCwgODApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgdmFyIHNraWxsc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraWxscy1ncm91cFwiKTtcclxuXHJcbiAgICBpZiAoc2tpbGxzTGlzdCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gICAgICAgICAgICBwYXJhbGF4LmluaXQod1Njcm9sbCk7XHJcblxyXG4gICAgICAgICAgICBza2lsbHMuaW5pdCh3U2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRNYXAgKCkge1xyXG4gICAgICAgIHZhciBwb2ludGVyID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg0Ny44ODgzMzYsIDM1LjA2NDg0MiksXHJcbiAgICAgICAgICAgIGNlbnRlciA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDcuODc1Mjk2LCAzNS4wODA1OTgpO1xyXG5cclxuICAgICAgICB2YXIgc3R5bGVzID0gW3tcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZVwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0LmZpbGxcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiM0NDQ0NDRcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwibGFuZHNjYXBlXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjZjJmMmYyXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInBvaVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvblwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInNhdHVyYXRpb25cIjotMTAwfSx7XCJsaWdodG5lc3NcIjo0NX1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZC5oaWdod2F5XCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcInNpbXBsaWZpZWRcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZC5hcnRlcmlhbFwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy5pY29uXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9mZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJ0cmFuc2l0XCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9mZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJ3YXRlclwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiIzQzNjlhYVwifSx7XCJ2aXNpYmlsaXR5XCI6XCJvblwifV19XTtcclxuICAgICAgICB2YXIgc3R5bGVkTWFwID0gbmV3IGdvb2dsZS5tYXBzLlN0eWxlZE1hcFR5cGUoc3R5bGVzLFxyXG4gICAgICAgICAgICB7bmFtZTogXCJTdHlsZWQgTWFwXCJ9KTtcclxuXHJcbiAgICAgICAgdmFyIG1hcFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBjZW50ZXI6IGNlbnRlcixcclxuICAgICAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICB6b29tOiAxNSxcclxuICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2xPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBtYXBUeXBlSWRzOiBbZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsICdtYXBfc3R5bGUnXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB6b29tQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICAgICAgem9vbUNvbnRyb2xPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uLlJJR0hUX1RPUFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIG1hcFNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICBpY29uOiAnYXNzZXRzL2ltZy9tYXJrZXIucG5nJyxcclxuICAgICAgICAgICAgcG9zaXRpb246IHBvaW50ZXIsXHJcbiAgICAgICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJJJ20gaGVyZSFcIixcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uQk9VTkNFXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1hcC5tYXBUeXBlcy5zZXQoJ21hcF9zdHlsZScsIHN0eWxlZE1hcCk7XHJcbiAgICAgICAgbWFwLnNldE1hcFR5cGVJZCgnbWFwX3N0eWxlJyk7XHJcbiAgICB9XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRk9STSBBVVRIT1JJU0FUSU9OXHJcbiAgICAkKCcubG9naW4tZmllbGQnKS5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxvZ2luLWZpZWxkJykuc2libGluZ3MoKS5jc3MoJ2ZpbGwnICwgJyNjNGNiY2QnKTtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkuY3NzKCdmaWxsJyAsICcjMDA0Y2QxJyk7XHJcbiAgICAgICAgJCgnLmlucHV0LWVycm9yX19tc2cnKS5jc3MoJ2Rpc3BsYXknICwgJ25vbmUnKTtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgJCgnI2Zvcm0tZW50ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxvZ2luPSAkKCcjdXNlci1uYW1lJykudmFsKCk7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkPSAkKCcjdXNlci1wYXNzd29yZCcpLnZhbCgpO1xyXG4gICAgICAgIGlmIChsb2dpbj09XCJcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0YPRgdC70L7QstC40LUgMScpO1xyXG4gICAgICAgICAgICBpZiAocGFzc3dvcmQ9PScnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiINGC0L4g0Lgg0LTRgCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmlucHV0LWVycm9yX19tc2cnKS5lcSgyKS5jc3MoJ2Rpc3BsYXknICwgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmxvZ2luLWljbycpLmNzcygnZmlsbCcgLCAncmVkJylcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgJCgnLmlucHV0LWVycm9yX19tc2cnKS5lcSgwKS5jc3MoJ2Rpc3BsYXknICwgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3VzZXItbmFtZScpLnNpYmxpbmdzKCkuY3NzKCdmaWxsJywgJ3JlZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGlmIChwYXNzd29yZD09Jycpe1xyXG4gICAgICAgICAgICAgICAgJCgnLmlucHV0LWVycm9yX19tc2cnKS5lcSgxKS5jc3MoJ2Rpc3BsYXknICwgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3VzZXItcGFzc3dvcmQnKS5zaWJsaW5ncygpLmNzcygnZmlsbCcsICdyZWQnKVxyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZigoJCgnI2h1bWFuLWNoZWNrMScpLnByb3AoJ2NoZWNrZWQnKT09dHJ1ZSkgJiYgKCQoJyNodW1hbi1jaGVjay15ZXMnKS5wcm9wKCdjaGVja2VkJyk9PXRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoICfQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPINC30LDQstC10YDRiNC10L3QsCcpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge2FsZXJ0KCfQoNC+0LHQvtGC0LDQvCDQt9C00LXRgdGMINC90LUg0LzQtdGB0YLQvicpfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuIl19
