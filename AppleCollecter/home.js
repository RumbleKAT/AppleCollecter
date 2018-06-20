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

    $('#definition').click(function(){
      if($(this).attr('src') == "./src/img/ios.jpg"){
        $(this).attr('src','./src/img/ios02.jpg');
      }else{
        $(this).attr('src','./src/img/ios.jpg');
      }
    });


});
