$(document).ready(function(){
    $('#count-sum').on('click', function(){
        let sum = 0;
        $('.salary').each(function(){
            sum += parseFloat($(this).text());
            console.log($(this).text())

        });


        $('#sum').text(sum);



    });

   



});