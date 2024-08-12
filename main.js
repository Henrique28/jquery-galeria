$(document).ready(function(){

    console.log()

    $('.btn-imagem').click(function(){
        $('form').slideDown();
    })

    $('.btn-cancelar').click(function(){
        $('form').slideUp();
    })
    
    $('form').on('submit', function(e){
        e.preventDefault();

        const imgUrl = $('#input-url').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${imgUrl}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay">
                <a href="${imgUrl}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>`
        ).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#input-url').val('');
    })
});