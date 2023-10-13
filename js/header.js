$(function() {
    let depth1 = $('.depth1');
    let depth2 = $('.depth2');
    let darkBg = $('gnb_dark');
    let hideMenu = $('.hide-menu');
    let mainMenu = $('.mainMenu');
    
    depth1.on('mouseover focusin', function() {
        $(this).children('.depth2').addClass('action').stop().fadeIn(100)
        //$('.gnb_bg').stop().animate({top: '0', opacity: '1'},300)
        $('.gnb_bg').stop().fadeIn(30).animate({/* top: '0',  */opacity: '1'},100)
    })
    depth1.on('mouseleave', function() {
        $(this).removeClass('action')
        $(this).children('.depth2').stop().fadeOut(100)
        //$('.gnb_bg').stop().animate({top: '-600px'},300)
        $('.gnb_bg').stop().fadeOut(30).animate({opacity: '0'},100)
    })

})