$(function() {
    $('#gotop').click(function() {
        $('html,body').animate({ scrollTop: '0px' }, 800);
    });
    $('#goskill').click(function() {
        $('html,body').animate({ scrollTop: $('#skill').offset().top }, 800);
    });
    $('#goexperience').click(function() {
        $('html,body').animate({ scrollTop: $('#experience').offset().top }, 800);
    });
    $('#gohabit').click(function() {
        $('html,body').animate({ scrollTop: $('#habit').offset().top }, 800);
    });
    $('#navskill').click(function() {
        $('html,body').animate({ scrollTop: $('#skill').offset().top }, 800);
    });
    $('#navexperience').click(function() {
        $('html,body').animate({ scrollTop: $('#experience').offset().top }, 800);
    });
    $('#navhabit').click(function() {
        $('html,body').animate({ scrollTop: $('#habit').offset().top }, 800);
    });
});