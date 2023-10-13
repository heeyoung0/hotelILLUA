$(function() {
    
    if($(window).width() > 640) {
        let mHtml = $("html");
        let page = 1;
        $(window).on("wheel", function(e) {
            if(mHtml.is(":animated")) return;
            if(e.originalEvent.deltaY > 0) {
                if(page == 5) return;
                page++;
            } else if(e.originalEvent.deltaY < 0) {
                if(page == 1) return;
                page--;
            }
            var posTop =(page-1) * $(window).height();
            mHtml.animate({scrollTop : posTop},800);
        })
        } else {
            $(window).on("wheel", function(e) {
                if(e.originalEvent.deltaY > 0) {
                    e.preventDefault()
                } else if(e.originalEvent.deltaY < 0) {
                    e.preventDefault()
                }
            })
        }
    
    
    let btn = $('.select-btn');
    let select = $('.selectBox');
    let arrowBtn = $('.arrow');
    let angle = 0;
    let angle1 = -180;
    btn.on('click', function() {
        $(this).siblings('.selecbox-option').stop().slideToggle(400)
    })

    $(".selecbox-option").on("click","li",function(e){
        //console.log($(e.target).text());
        let selectText = $(e.target).text()
        //console.log(selectText)
        $('.select-btn').text(selectText)
     })
     $(".selecbox-option").on('mouseleave', function() {
        $(this).slideUp()
     })

    let depth1 = $('.depth1');
    let depth2 = $('.depth2');
    let darkBg = $('gnb_dark');
    let hideMenu = $('.hide-menu');
    //let mainMenu = $('.mainMenu');
    
    depth1.on('mouseover focusin', function() {
        $(this).children('.depth2').addClass('action').stop().fadeIn(300)
        $('.gnb_bg').stop().animate({top: '-30px', opacity: '1'})
        $('.logoArea').children('svg').css({'fill':'#111'})
        $('.header-right').css({'color':'#111'})
        $('.reserv').children('a').css({'borderColor':'#111'})
    })
    depth1.on('mouseleave', function() {
        $(this).removeClass('action')
        $(this).children('.depth2').stop().fadeOut(300)
        $('.gnb_bg').stop().animate({top: '-480px'})
        $('.logoArea').children('svg').css({'fill':'#fff'})
        $('.header-right').css({'color':'#fff'})
        $('.reserv').children('a').css({'borderColor':'#fff'})
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

    /* 아래부터는 reactive */
    $('.mobile-menu-btn .open').on('click', function() {
        $('#reactive-menu').stop().animate({'right':0},400)
        $('.reactive-bg').stop().fadeIn(400)
    })
    $('.menu-contents > li > span').on('click', function() {
        $(this).toggleClass('active')
        /* $(this).siblings('.reactive-hide').stop().slideToggle(400) */
        if($(this).hasClass('active')) {
            $(this).siblings('.reactive-hide').stop().slideDown(300)
            $(this).css({'color':'#ad7b61'})
        } else {
            $(this).siblings('.reactive-hide').stop().slideUp(300)
            $(this).css({'color':'#111'})
        }
    })
    $('.top-ico .close-ico').on('click', function() {
        $('#reactive-menu').stop().animate({'right':'-420px'},400)
        $('.reactive-bg').stop().fadeOut(400)
    })

    
})
                                
    