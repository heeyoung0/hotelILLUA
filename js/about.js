$(function() {

    $(window).on("wheel", function(e) {
        if(mHtml.is(":animated")) return;
        if(e.originalEvent.deltaY > 0) {
            if(page == 6) return;
            page++;
        } else if(e.originalEvent.deltaY < 0) {
            if(page == 1) return;
            page--;
        }
        var posTop =(page-1) * $(window).height();
        mHtml.animate({scrollTop : posTop},1000);
    })
        var mHtml = $("html");
        var page = 1;
        mHtml.animate({scrollTop : 0},500);
    

    let btn = $('.select-btn');
    let select = $('.selectBox');
    let arrowBtn = $('.arrow');
    let angle = 0;
    let angle1 = -180;
    btn.on('click', function() {
        $(this).children('.selecbox-option').stop().slideToggle(400)
    })

        
    let depth1 = $('.depth1');
    let depth2 = $('.depth2');
    let darkBg = $('gnb_dark');
    let hideMenu = $('.hide-menu');
    let mainMenu = $('.depth1 > a');
    
    depth1.on('mouseover focusin', function() {
        $(this).children('.depth2').addClass('action').stop().fadeIn(300)
        $('.gnb_bg').stop().animate({top: '0', opacity: '1'})
        $('.logoArea').children('svg').css({'fill':'#111'})
        $('.header-right').css({'color':'#111'})
        $('.reserv').children('a').css({'borderColor':'#111'})
        mainMenu.css({'color':'#111'})
    })
    depth1.on('mouseleave', function() {
        $(this).removeClass('action')
        $(this).children('.depth2').stop().fadeOut(300)
        $('.gnb_bg').stop().animate({top: '-600px'})
        $('.logoArea').children('svg').css({'fill':'#fff'})
        $('.header-right').css({'color':'#fff'})
        $('.reserv').children('a').css({'borderColor':'#fff'})
        $('.mainMenu').css({'color':'#fff'})
    })

        /* datepicker */
    $('.input-item').datepicker();
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd-D',
        prevText: '이전달',
        nextText: '다음달',
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dayNames: ['일','월','화','수','목','금','토'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        showMonthAfterYear: true,
        yearsuffix: '년',
        minDate:'+1D', //위의 시작날짜에서 선택한 다음날 부터

    })

    
})
