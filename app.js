$(document).ready(function(){
    
// MENU NAVIGATION FOR MOBILE @MEDIA //

$(".burger-icon").click(function() {
    if($(".main-nav").hasClass("mobile-hide")){
        $(".main-nav").removeClass("mobile-hide");
        $(".main-nav").addClass("mobile-shov");
    }else{
        $(".main-nav").addClass("mobile-hide");
        $(".main-nav").removeClass("mobile-show");
    }
});
});

