$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const descricaoTarefa=$('#tarefa').val();
        $(`<li>${descricaoTarefa}</li>`).appendTo('ul');
        $('#tarefa').val('');
    });

    $("ul").on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
    });
});