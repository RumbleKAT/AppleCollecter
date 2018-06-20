$(document).ready(function(){
    $('.closebtn').click(function () {
        console.log("close");
        $('#mySideNav').css({
            width: 0
        })
    })

    $('.openbtn').click(function () {
        console.log("open");
        $('#mySideNav').css({
            width: 250
        })
    });
    $('#bar_animation').animate({
        width: 0,
        height: 10
    }, 3000).delay(1000).animate({
        width:"100%"
    },"slow");

    $('#definition').click(function(){
      if($(this).attr('src') == "./src/img/ios.jpg"){
        $(this).attr('src','./src/img/ios02.jpg');
      }else{
        $(this).attr('src','./src/img/ios.jpg');
      }
    });
});
