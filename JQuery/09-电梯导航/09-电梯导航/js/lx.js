$(function(){
    // 节流阀
    let flag = true
    // 滚动事件
    function hidshow () {
        if($(document).scrollTop() >= $('.recommend').offset().top){
            $('.fixedtool').fadeIn(0)
        }else{
            $('.fixedtool').fadeOut(0)
        }
       if(flag){
        $('.floor .w').each(function(index){
            if($(document).scrollTop() >= $(this).offset().top){
                $('.fixedtool li').eq(index).addClass('current').siblings().removeClass('current')
            }
        })
       }
    }
    hidshow()
    $(window).scroll(function(){
        hidshow()
    })
    // 点击事件
    $('.fixedtool li').click(function(){
        flag = false
        $(this).addClass('current').siblings().removeClass('current')
        $('body, html').stop().animate({
            scrollTop: $('.floor .w').eq($(this).index()).offset().top
        },function(){
            flag = true
        })
    })
})