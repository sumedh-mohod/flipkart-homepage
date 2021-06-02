$(document).ready(function(){
    $('.example').square1({
    // or 'contain'
    fill_mode: 'cover',
    // CSS background-position property
    scale_from: 'center center',
    // 'inside', 'outside', 'hover', 'none'
    prev_next_nav: 'inside',
    dots_nav: 'none',
    caption: 'none',
    lazy_load: true,
    // use slide transition
    animation: 'slide',
    // in milliseconds
    slide_duration: 4000,
    transition_time: 500,
    keyboard: true,
    gestures: true,
    auto_start: true,
    start_delay: 0,
    pause_on_hover: true,
    width:'',
    height: '',
    background: 'none',
    //onLoad: function() {},
    //onPlay: function() {},
    //onStop: function() {},
    //onChange: function() {}
    
    });

    $('#nmn').hide();
$('#mnm').click(function(){
$('.wrap-deal-1').animate({'margin-left':'-48%'},500);
$('#mnm').hide();
$('#nmn').show();
});
$('#nmn').click(function(){
$('.wrap-deal-1').animate({'margin-left':'10px'},500);
$('#nmn').hide();
$('#mnm').show();
});

$('.footwear-left-arrow').hide();
$('.footwear-right-arrow').click(function(){
$('.footwear-wrapper').animate({'margin-left':'-20%'},500);
$('.footwear-right-arrow').hide();
$('.footwear-left-arrow').show();
});
$('.footwear-left-arrow').click(function(){
$('.footwear-wrapper').animate({'margin-left':'5px'},500);
$('.footwear-left-arrow').hide();
$('.footwear-right-arrow').show();
});

$('.left-arrow').hide();
$('.right-arrow').click(function(){
$('.Headphones-and-Speaker-wrapper').animate({'margin-left':'-20%'},500);
$('.right-arrow').hide();
$('.left-arrow').show();
});
$('.left-arrow').click(function(){
$('.Headphones-and-Speaker-wrapper').animate({'margin-left':'5px'},500);
$('.left-arrow').hide();
$('.right-arrow').show();
});

$('.Top-offers-left-arrow').hide();
$('.Top-offers-right-arrow').click(function(){
$('.Top-offers-wrapper').animate({'margin-left':'-20%'},500);
$('.Top-offers-right-arrow').hide();
$('.Top-offers-left-arrow').show();
});
$('.Top-offers-left-arrow').click(function(){
$('.Top-offers-wrapper').animate({'margin-left':'5px'},500);
$('.Top-offers-left-arrow').hide();
$('.Top-offers-right-arrow').show();
});

$('.Women-Accessories-left-arrow').hide();
$('.Women-Accessories-right-arrow').click(function(){
$('.Women-Accessories-wrapper').animate({'margin-left':'-20%'},500);
$('.Women-Accessories-right-arrow').hide();
$('.Women-Accessories-left-arrow').show();
});
$('.Women-Accessories-left-arrow').click(function(){
$('.Women-Accessories-wrapper').animate({'margin-left':'5px'},500);
$('.Women-Accessories-left-arrow').hide();
$('.Women-Accessories-right-arrow').show();
});

$('.Top-Deals-on-Fashion-left-arrow').hide();
$('.Top-Deals-on-Fashion-right-arrow').click(function(){
$('.Top-Deals-on-Fashion-wrapper').animate({'margin-left':'-20%'},500);
$('.Top-Deals-on-Fashion-right-arrow').hide();
$('.Top-Deals-on-Fashion-left-arrow').show();
});
$('.Top-Deals-on-Fashion-left-arrow').click(function(){
$('.Top-Deals-on-Fashion-wrapper').animate({'margin-left':'5px'},500);
$('.Top-Deals-on-Fashion-left-arrow').hide();
$('.Top-Deals-on-Fashion-right-arrow').show();
});

$('.best-of-electronics-left-arrow').hide();
$('.best-of-electronics-right-arrow').click(function(){
$('.best-of-electronics-wrapper').animate({'margin-left':'-20%'},500);
$('.best-of-electronics-right-arrow').hide();
$('.best-of-electronics-left-arrow').show();
});
$('.best-of-electronics-left-arrow').click(function(){
$('.best-of-electronics-wrapper').animate({'margin-left':'5px'},500);
$('.best-of-electronics-left-arrow').hide();
$('.best-of-electronics-right-arrow').show();
});

$('.fashion-for-everyone-left-arrow').hide();
$('.fashion-for-everyone-right-arrow').click(function(){
$('.fashion-for-everyone-wrapper').animate({'margin-left':'-20%'},500);
$('.fashion-for-everyone-right-arrow').hide();
$('.fashion-for-everyone-left-arrow').show();
});
$('.fashion-for-everyone-left-arrow').click(function(){
$('.fashion-for-everyone-wrapper').animate({'margin-left':'5px'},500);
$('.fashion-for-everyone-left-arrow').hide();
$('.fashion-for-everyone-right-arrow').show();
});

$('.top-picks-on-fashion-left-arrow').hide();
$('.top-picks-on-fashion-right-arrow').click(function(){
$('.top-picks-on-fashion-wrapper').animate({'margin-left':'-20%'},500);
$('.top-picks-on-fashion-right-arrow').hide();
$('.top-picks-on-fashion-left-arrow').show();
});
$('.top-picks-on-fashion-left-arrow').click(function(){
$('.top-picks-on-fashion-wrapper').animate({'margin-left':'5px'},500);
$('.top-picks-on-fashion-left-arrow').hide();
$('.top-picks-on-fashion-right-arrow').show();
});

$('.mens-clothing-left-arrow').hide();
$('.mens-clothing-right-arrow').click(function(){
$('.mens-clothing-wrapper').animate({'margin-left':'-20%'},500);
$('.mens-clothing-right-arrow').hide();
$('.mens-clothing-left-arrow').show();
});
$('.mens-clothing-left-arrow').click(function(){
$('.mens-clothing-wrapper').animate({'margin-left':'5px'},500);
$('.mens-clothing-left-arrow').hide();
$('.mens-clothing-right-arrow').show();
});

$('.furniture-best-sellers-left-arrow').hide();
$('.furniture-best-sellers-right-arrow').click(function(){
$('.furniture-best-sellers-wrapper').animate({'margin-left':'-20%'},500);
$('.furniture-best-sellers-right-arrow').hide();
$('.furniture-best-sellers-left-arrow').show();
});
$('.furniture-best-sellers-left-arrow').click(function(){
$('.furniture-best-sellers-wrapper').animate({'margin-left':'5px'},500);
$('.furniture-best-sellers-left-arrow').hide();
$('.furniture-best-sellers-right-arrow').show();
});

$('.top-rated-appliances-left-arrow').hide();
$('.top-rated-appliances-right-arrow').click(function(){
$('.top-rated-appliances-wrapper').animate({'margin-left':'-20%'},500);
$('.top-rated-appliances-right-arrow').hide();
$('.top-rated-appliances-left-arrow').show();
});
$('.top-rated-appliances-left-arrow').click(function(){
$('.top-rated-appliances-wrapper').animate({'margin-left':'5px'},500);
$('.top-rated-appliances-left-arrow').hide();
$('.top-rated-appliances-right-arrow').show();
});

$('.best-battery-phones-left-arrow').hide();
$('.best-battery-phones-right-arrow').click(function(){
$('.best-battery-phones-wrapper').animate({'margin-left':'-20%'},500);
$('.best-battery-phones-right-arrow').hide();
$('.best-battery-phones-left-arrow').show();
});
$('.best-battery-phones-left-arrow').click(function(){
$('.best-battery-phones-wrapper').animate({'margin-left':'5px'},500);
$('.best-battery-phones-left-arrow').hide();
$('.best-battery-phones-right-arrow').show();
});

$('.Top-Accessories-left-arrow').hide();
$('.Top-Accessories-right-arrow').click(function(){
$('.Top-Accessories-wrapper').animate({'margin-left':'-20%'},500);
$('.Top-Accessories-right-arrow').hide();
$('.Top-Accessories-left-arrow').show();
});
$('.Top-Accessories-left-arrow').click(function(){
$('.Top-Accessories-wrapper').animate({'margin-left':'5px'},500);
$('.Top-Accessories-left-arrow').hide();
$('.Top-Accessories-right-arrow').show();
});

// $('.scroller').cSlider();


// $('header-container').on("touchmove",function(evt){
//     var touch = evt.originalEvent.touches[0];
//     var x = touch.clientX;

//     $(this).css({
//         "webkit-transform": "translate("+ x +"px,0)"
//     });
// });

$('.btn,.tooltip').mouseenter(function(){
    $('.tooltip').css({"display":"block"});
});

$('.btn,.tooltip').mouseleave(function(){
    $('.tooltip').css({"display":"none"})
});

$('.more,.more-tooltip').mouseenter(function(){
    $('.more-tooltip').css({"display":"block"});
});

$('.more,.more-tooltip').mouseleave(function(){
    $('.more-tooltip').css({"display":"none"})
});

});

