$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        let addTarefa = $('#tarefa-nova').val();
        $('ul').append('<li>' + addTarefa + '</li>');
        console.log(toAdd);
    });

    $(document).on('click','li', function() {
        $(this).toggleClass('active');
    });
});



