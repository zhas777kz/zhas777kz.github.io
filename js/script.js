$(function(){
 $('#my-menu').mmenu({
       extensions: ['theme-black', 'effct-menu-slide', 'pagedim-black'],
       navbar:{
           title: '<img src="img/logo1.svg" alt="логотип"'
       },
       offCanvas: {
           position:'right'
       }
   }); 
    
    var api = $('#my-menu').data('mmenu');
    api.bind('open:finish', function(){
        $('.hamburger').addClass('is-active');
    });
    api.bind('close:finish', function(){
        $('.hamburger').removeClass('is-active');
    });
});