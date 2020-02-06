$(document).ready(function(){

    // $('.gambar1').mouseenter(function(){
    //     $('.text').slideUp()
    //     }).mouseleave(function(){
    //         $('.text').slideDown()
    // });
    $('.text, .text2, .text3, .text4').hide();
    
    $('.gambar1').mouseenter(function(){
        $('.text').slideDown('slow')
    });
    $('.gambar1').mouseleave(function(){
        $('.text').slideUp()
    });

    $('.gambar2').mouseenter(function(){
        $('.text2').slideDown('slow')
    });
    $('.gambar2').mouseleave(function(){
        $('.text2').slideUp()
    });

    $('.gambar3').mouseenter(function(){
        $('.text3').slideDown('slow')
    });
    $('.gambar3').mouseleave(function(){
        $('.text3').slideUp()
    });

    $('.gambar4').mouseenter(function(){
        $('.text4').slideDown('slow')
    });
    $('.gambar4').mouseleave(function(){
        $('.text4').slideUp()
    });
})