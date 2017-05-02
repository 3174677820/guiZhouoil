/**
 * Created by sunLi on 2017/4/18.
 */
/*===================================================
            the left sidebar's js
===================================================*/
jQuery('#sidebar .sub-menu > a').click(function () {
    var last = jQuery('.sub-menu.open', $('#sidebar'));
    last.removeClass("open");
    jQuery('.arrow', last).removeClass("open");
    jQuery('.sub', last).slideUp(200);
    var sub = jQuery(this).next();
    if (sub.is(":visible")) {
        jQuery('.arrow', jQuery(this)).removeClass("open");
        jQuery(this).parent().removeClass("open");
        sub.slideUp(200);
    } else {
        jQuery('.arrow', jQuery(this)).addClass("open");
        jQuery(this).parent().addClass("open");
        sub.slideDown(200);
    }
    var o = ($(this).offset());
    diff = 200 - o.top;
    //if(diff>0)
    //    $("#sidebar").scrollTo("-="+Math.abs(diff),500);
    //else
    //    $("#sidebar").scrollTo("+="+Math.abs(diff),500);
});
$(document).ready(function(){
    $(".sidebar-close").click(function () {
        if($(this).parent("#sidebar").css("width")=='180px'){
            if( $(this).prop("title")=="点击收起菜单"){
                $(this).prop("title","点击展开菜单");
            }

            $(this).parent("#sidebar").css({
                "overflow":"hidden",
            });
            $(this).css({
                "background-image":"url('images/open.png')",
                "width":"82%"
            });
            $(".sidebar-info >*").fadeOut(300);
            $("ul.sidebar-menu li").css("position","relative");
            $("ul.sidebar-menu li").append(
                "<div class='shade-sidebar'></div>"
            );
            $("ul.sidebar-menu li a").css({"padding":"10px 0","height":"40px"});
            $(".sidebar-img").css({"margin-left":"5px"});
            $("ul.sidebar-menu li a span").fadeOut(300);
            $(this).parent("#sidebar").animate({
                width:"30px"
            });

        }else if($(this).parent("#sidebar").css("width")=='30px'){
            if($(this).prop("title")=="点击展开菜单"){
                $(this).prop("title","点击收起菜单");
            }
            $(this).css({
                "background-image":"url('images/shouqi.png')",
                "width":"100%"
            });
            $(".sidebar-info>*").fadeIn(300);
            $("ul.sidebar-menu li").css("position","relative");
            $("shade-sidebar").fadeOut(300);

            $("ul.sidebar-menu li a").css({"padding":"15px","height":"auto"});
            $(".sidebar-img").css({"margin-left":"0px"});

            $(this).parent("#sidebar").animate({
                width:"180px"
            });

            setTimeout(function () {
                $("ul.sidebar-menu li a span").fadeIn();

            },300)
        }

    });
});
/*===================================================
               the shaow's js
===================================================*/
$(document).ready(function () {
    function shadeDisplayOn(displayOn,displayNo){
        displayOn.each(function () {
            var window_height = $(window).height();
            $(this).click(function () {
                setTimeout(function(){
                    $("html,body").animate({scrollTop: '0px'}, 100);
                    $("html,body").css("overflow", "hidden");
                    $("body").height($(window).height());
                    $(".shade-bg").css("height", window_height);
                    $(".shade-alert").hide();
                    $(".shade-bg").fadeIn();
                    $(".shade-menu").fadeIn();
                },0);
            });

        });
        displayNo.click(function () {
            $(".shade-bg").fadeOut();
            $(".shade-menu").fadeOut();
            $(".shade-alert").fadeOut();
            $("body").height("auto");
            $("html,body").css("overflow", "auto");
        });
    }
    shadeDisplayOn($(".shade-display"),$(".shade-alert-close"));
});
