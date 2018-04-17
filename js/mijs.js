// Documento JavaScript



$(function () {
    $(".carta").draggable({
        containment: 'window',
        revert: "invalid",
        appendTo: 'body',
        scroll: false
    });

    
    $(".slop").droppable({
        drop: function (event, ui) {
            ui.draggable.draggable('disable');
            ui.draggable.position({ of: $(this),
                my: 'center bottom',
                at: 'center bottom'
            });
        $(this).droppable({disabled: true});
        }
    });


});
