$(document).ready(function(){
    $('#first').click(function(){
        $('p:last').insertBefore('p:first');

    });

    $('#last').click(function(){
        $('p:first').insertAfter('p:last');

    });




});