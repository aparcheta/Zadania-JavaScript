$(document).ready(function(){
    const square = $('.red');
    $('#animate').click(function(){
        square.animate({height: 100, width: 100, marginLeft: 100}, 3000, function(){
            $(this).animate({backgroundColor: 'blue'}, 5000, function(){
                $('h2').text('Animacja zakończona');

            });

        });


    });


});