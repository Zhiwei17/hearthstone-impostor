// Documento JavaScript
$(document).ready(function () {




});
$(function () {
    $("#draggable").draggable({

        containment: 'window',
        revert: "invalid",
        appendTo: 'body',
        scroll: false,

    });
    
    $("#mimesa").droppable({
        drop: function (event, ui) {
            
        }
    });
    
    
    
});

