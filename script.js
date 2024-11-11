$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        let toAdd = $('#tarefa-nova').val();
        $('ul').append('<li>' + toAdd + '</li>');
        console.log(toAdd);
    });

    $(document).on('click','li', function() {
        $(this).toggleClass('active');
    });
});



