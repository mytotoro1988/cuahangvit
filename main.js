$(document).ready(function(){
    $('.header__navbar--item--link--sign').click(function(event){
        $('.modal').addClass('show');
        $('.auth--form1').addClass('show1');
    })
    
    $('.header__navbar--item--link--log').click(function(event){
        $('.modal').addClass('show');
        $('.auth--form').addClass('show1');
    })

    $('.auth--form__controls--back').click(function(event){
        $('.modal').removeClass('show');
        $('.auth--form1').removeClass('show1');
        $('.auth--form').removeClass('show1');

    })
    $('.auth--form__switch__btn1').click(function(event){
        
        $('.auth--form1').removeClass('show1');
        $('.auth--form').addClass('show1');  
    })
    $('.auth--form__switch__btn').click(function(event){
        
        $('.auth--form1').addClass('show1');
        $('.auth--form').removeClass('show1');  
    })
   
});