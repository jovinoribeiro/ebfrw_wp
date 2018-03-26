$(document).ready(function(){
    $("#learn-more").hover(function(){
        $(this).addClass("glyphicon glyphicon-arrow-down");
        }, function(){
        $(this).removeClass("glyphicon glyphicon-arrow-down");  
        $(this).addClass("glyphicon glyphicon-arrow-right");
    });
    
});
