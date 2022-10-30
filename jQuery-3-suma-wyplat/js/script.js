$(document).ready(function(){
    $('#count-sum').on('click', function(){
        let sum = 0;
        $('.salary').each(function(){
            sum += parseFloat($(this).val());

        });


        $('#sum').text(sum);



    });

   



});