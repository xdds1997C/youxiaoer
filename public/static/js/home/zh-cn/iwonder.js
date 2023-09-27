$(document).ready(function () {
    if ($('.indexHeader')) {
        $('.indexHeader .logoBox img').attr('src','/public/static/images/home/zh-cn/logo2.png')
    }
    // start()
})

$(function () {
    $('.indexBanner').slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        fade: false,
        touchMove:false,
    });
    $('.conItem4Slick').slick({
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        fade: false,
        touchMove:false,
    });
    $('.conItem5Slick').slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        fade: false,
        touchMove:false,
    });

    $('.index1Slick').slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: false,
        focusOnSelect: true,
        variableWidth: true,
        fade: false,
        centerMode:true,
        touchMove:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
                centerMode:false,
            }
        }]
    });

    $('.index3Slick').slick({
        dots: false,
        asNavFor: '.index3SlickNav',
        infinite: true,
        arrows: true,
        autoplay: false,
        fade: false,
        touchMove:false,
    });
    $('.index3SlickNav').slick({
        dots: false,
        asNavFor: '.index3Slick',
        infinite: true,
        arrows: false,
        autoplay: false,
        focusOnSelect: true,
        variableWidth: true,
        fade: false,
        touchMove:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                centerPadding: '0px',
                slidesToShow: 2,
                variableWidth: false,
            }
        },{
            breakpoint: 640,
            settings: {
                centerPadding: '0px',
                slidesToShow: 1,
                variableWidth: false,
            }
        }]
    });
    
});
$(function () {
    var p=0,t=0;
    $(window).scroll(function(e){
        p = $(this).scrollTop();
        if(t<p){
            $(".indexHeader").addClass("is_stuck");
            $('.indexHeader .logoBox img').attr('src','/public/static/images/home/zh-cn/logo1.png')
        }
        else if( p == 0 ){
            $(".indexHeader").removeClass("is_stuck");
            $('.indexHeader .logoBox img').attr('src','/public/static/images/home/zh-cn/logo2.png')
        }else{
            $(".indexHeader").addClass("is_stuck");
            $('.indexHeader .logoBox img').attr('src','/public/static/images/home/zh-cn/logo1.png')
        }
        setTimeout(function(){t = p;},0);
    });

    $('.index2Slick').slick({
        infinite: true,
        variableWidth: true,
        dots: false,
        arrows:true,
        autoplay: false,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        // centerPadding: "18.75%",
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 992,
            settings: {
                variableWidth: false,
                slidesToShow: 2,
                centerMode: false,
            }
        },{
            breakpoint: 480,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
                centerMode: false,
            }
        }]
    });
    $('.index5Slick').slick({
        vertical: false,
        asNavFor: '.index5SlickNav',
        dots: false,
        centerPadding: "0",
        arrows:false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1450,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
    $('.index5SlickNav').slick({
        dots: false,
        asNavFor: '.index5Slick',
        infinite: true,
        arrows: true,
        autoplay: false,
        focusOnSelect: true,
        fade: false,
        touchMove:true,
    });
    $(".index3 .imgs").hover(function () {
        var _data = $(this).attr("data-name");
        $(".index3 .content").removeClass("on");
        $(".index3 .content[data-name="+_data+"]").addClass("on");
    })
    $(".about1 .target .item").click(function () {
        var _data = $(this).attr("data-name");
        $(".about1 .target .item").removeClass("on")
        $(this).addClass("on")
        $(".about1 .targetTo .item").removeClass("on");
        $(".about1 .targetTo .item[data-name="+_data+"]").addClass("on");
    })

    $(".video-clicks").click(function () {
        $(this).parent().css({'z-index':'1'})
        var src = $(this).attr('data-src')
        console.log(src);
        $(this).parent().next().css({'z-index':'2'})
        $(this).parent().next().attr('autoplay','autoplay')
        $(this).parent().next().attr('src',src)
        $(this).parent().next().play()
    })
});



    $(function () {
        var can = true;
        document.onscroll = function() {
            var t = document.documentElement.scrollTop||document.body.scrollTop;
            if($(".index2").length!==0) {
                if(t>=($('.index2')[0].offsetTop-300)&&can){
                    $(".index2 .num1").numberRock({
                        speed: 28,
                        count: $(".index2 .num1").text()
                    });
                    $(".index2 .num2").numberRock({
                        speed: 28,
                        count: $(".index2 .num2").text()
                    });
                    $(".index2 .num3").numberRock({
                        speed: 28,
                        count: $(".index2 .num3").text()
                    });
                    $(".index2 .num4").numberRock({
                        speed: 28,
                        count: $(".index2 .num4").text()
                    });
                    $(".index2 .num5").numberRock({
                        speed: 28,
                        count: $(".index2 .num5").text()
                    });
                    can = false
                }
            }
        }
    });




$(function(){
    selectMenu(0);
    function selectMenu(index){
        $(".select-menu-input").eq(index).val($(".select-this").eq(index).html());//在输入框中自动填充第一个选项的值
        $(".select-menu-div").eq(index).on("click",function(e){
            e.stopPropagation();
            if($(".select-menu-ul").eq(index).css("display")==="block"){
                $(".select-menu-ul").eq(index).hide();
                $(".select-menu-div").eq(index).find("i").removeClass("select-menu-i");
                $(".select-menu-ul").eq(index).animate({marginTop:"50px",opacity:"0"},500);
            }else{
                $(".select-menu-ul").eq(index).show();
                $(".select-menu-div").eq(index).find("i").addClass("select-menu-i");
                $(".select-menu-ul").eq(index).animate({marginTop:"5px",opacity:"1"},500);
            }
            for(var i=0;i<$(".select-menu-ul").length;i++){
                if(i!==index&& $(".select-menu-ul").eq(i).css("display")==="block"){
                    $(".select-menu-ul").eq(i).hide();
                    $(".select-menu-div").eq(i).find("i").removeClass("select-menu-i");
                    $(".select-menu-ul").eq(i).animate({marginTop:"50px",opacity:"0"},500);
                }
            }

        });
        $(".select-menu-ul").eq(index).on("click","li",function(){//给下拉选项绑定点击事件
            $(".select-menu-input").eq(index).val($(this).html());//把被点击的选项的值填入输入框中
            console.log($(".select-menu-input").val());
            $(".select-menu-div").eq(index).click();
            $(this).siblings(".select-this").removeClass("select-this");
            $(this).addClass("select-this");
        });
        $("body").on("click",function(event){
            event.stopPropagation();
            if($(".select-menu-ul").eq(index).css("display")==="block"){
                console.log(1);
                $(".select-menu-ul").eq(index).hide();
                $(".select-menu-div").eq(index).find("i").removeClass("select-menu-i");
                $(".select-menu-ul").eq(index).animate({marginTop:"50px",opacity:"0"},500);

            }

        });

    }

    var ww = $(window).width();
    if (ww>=992) {
        $(".index2 .item").mouseenter(function(){
            $(this).stop().animate({
                "width":"25%",
                // "z-index":'999'
            },200).siblings().stop().animate({
                "width":"12.5%"
            },200)
            // $(this).find('.text').stop().animate({
            //     "width":"0%"
            // },0)
            // $(this).find('.img').stop().animate({
            //     "width":"100%",
            //     // "opacity":"1"
            // },200)
            // $(this).find('.img').css('display','block')
        })

        $(".index2 .item").mouseleave(function(){
            $(".index2 .item").stop().animate({
                "width":"14.28%",
                // "z-index":'998'
            },200)
            // $(".index2 .item").find('.text').stop().animate({
            //     "width":"100%"
            // },200)
            // $(".index2 .item").find('.img').stop().animate({
            //     "width":"0",
            //     // "opacity":"0"
            // },200)
            // $(".index2 .item").find('.img').css('display','none')
        })
    }
    else if (ww<992) {
        $(document).on('touchstart', '.index2 .item', function () {
            $(this).stop().animate({
                "height": "40%",
                // "z-index":'999'
            }, 500).siblings().stop().animate({
                "height": "20%"
            }, 500)
            $(this).find('.text').stop().animate({
                "height": "0%",
                "width": "0%"
            }, 0)
            $(this).siblings().find('.text').stop().animate({
                "height": "100%",
                "width": "100%"
            }, 500)
            $(this).find('.img').stop().animate({
                "height": "100%",
                "width": "100%"
            }, 500)
            $(this).siblings().find('.img').stop().animate({
                "height": "0%",
                "width": "0%"
            }, 500)
            $(this).find('.img').css('display', 'block')
            $(this).siblings().find('.img').css('display', 'none')

        })
    }




})

$(function () {
    $('.Fast_contact .show a').click(function () {
        $(this).toggleClass("rotate");
        $('.Fast_follow').slideToggle(500)
    })
})


