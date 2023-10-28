$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botão-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endereçoDaNovaImagem = $('#endereço-imagem-nova').val();
        const novoItem = $('<li></li>');
        $(`<img src="${endereçoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
        <div class="link-img">
            <a href="${endereçoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#endereçp-imagem-nova').val('');
    })

})
