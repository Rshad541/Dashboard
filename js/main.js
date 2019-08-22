$(function(){
    $('#nav-btn').on('click',function(){
        $('#side-menu').toggleClass('d-none');
        $('#main').toggleClass('col-12');
        $('#main').toggleClass('col-10');
    });
});