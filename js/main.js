$(document).ready(function gerador() {
    for (var i = 1; i < 31; i++) {
        // Random Fruta
        var min = 0;
        var max = 6;
        var randomPera = Math.floor(Math.random() * (+max - +min)) + +min;
        var randomMaca = Math.floor(Math.random() * (+max - +min)) + +min;
        // Random Name
        var name = ['João', 'Maria'];
        var selectName = name[Math.floor(Math.random() * name.length)];
        $('.table').append('\
        <tr id="'+ i + '">\
        <td class="dia"></td>\
                    <td class="qtdPera"></td>\
                    <td class="qtdMaca"></td>\
                    <td class="alunoDoDia"></td>\
                    <td class="fruta1"></td>\
                    <td class="fruta2"></td>\
                    <td class="fruta3"></td>\
                    </tr>\
        ');
        // gerador dia
        $('#' + i + ' .dia').html(i)
        // gerador frutas
        $('#' + i + ' .qtdPera').html(randomPera)
        $('#' + i + ' .qtdMaca').html(randomMaca)
        // gerador aluno
        $('#' + i + ' .alunoDoDia').html(selectName)
    }
});

$('#btn-distribuir').click(function () {
    // verificar distribuição
    for (var i = 1; i < 31; i++) {
        var melhorAlunoDia = $('#' + i + ' .alunoDoDia').text()
        var qtdPera = $('#' + i + ' .qtdPera').text()
        var qtdMaca = $('#' + i + ' .qtdMaca').text()
        switch (melhorAlunoDia) {
            case 'João':
                if (qtdMaca >= 3) {
                    $('#' + i + ' .fruta1').html('Maçã')
                    $('#' + i + ' .fruta2').html('Maçã')
                    $('#' + i + ' .fruta3').html('Maçã')
                }
                else if (qtdMaca == 2) {
                    $('#' + i + ' .fruta1').html('Maçã')
                    $('#' + i + ' .fruta2').html('Maçã')
                    if (qtdPera >= 3) {
                        $('#' + i + ' .fruta3').html('Pera')
                    }
                    else if (qtdPera == 2) {
                        $('#' + i + ' .fruta3').html('Pera')
                    }
                    else if (qtdPera == 1) {
                        $('#' + i + ' .fruta3').html('Pera')
                    }
                    else {
                    }
                }
                else if (qtdMaca == 1) {
                    $('#' + i + ' .fruta1').html('Maçã')
                    if (qtdPera >= 3) {
                        $('#' + i + ' .fruta2').html('Pera')
                        $('#' + i + ' .fruta3').html('Pera')
                    }
                    else if (qtdPera == 2) {
                        $('#' + i + ' .fruta2').html('Pera')
                        $('#' + i + ' .fruta3').html('Pera')
                    }
                    else if (qtdPera == 1) {
                        $('#' + i + ' .fruta3').html('Pera')
                    }
                    else {
                    }
                }
                else {
                    if (qtdPera >= 3) {
                        $('#' + i + ' .fruta1').html('Pera')
                        $('#' + i + ' .fruta2').html('Pera')
                        $('#' + i + ' .fruta3').html('Pera')
                    }
                    else if (qtdPera == 2) {
                        $('#' + i + ' .fruta2').html('Pera')
                        $('#' + i + ' .fruta3').html('Pera')
                    }
                    else if (qtdPera == 1) {
                        $('#' + i + ' .fruta3').html('Pera')
                    }
                    else {
                    }
                }
                break;
            case 'Maria':
                if (qtdPera >= 3) {
                    $('#' + i + ' .fruta1').html('Pera')
                    $('#' + i + ' .fruta2').html('Pera')
                    $('#' + i + ' .fruta3').html('Pera')
                }
                else if (qtdPera == 2) {
                    $('#' + i + ' .fruta1').html('Pera')
                    $('#' + i + ' .fruta2').html('Pera')
                    if (qtdMaca >= 3) {
                        $('#' + i + ' .fruta3').html('Maçã')
                    }
                    else if (qtdMaca == 2) {
                        $('#' + i + ' .fruta3').html('Maçã')
                    }
                    else if (qtdMaca == 1) {
                        $('#' + i + ' .fruta3').html('Maçã')
                    }
                    else {
                    }
                }
                else if (qtdPera == 1) {
                    $('#' + i + ' .fruta1').html('Pera')
                    if (qtdMaca >= 3) {
                        $('#' + i + ' .fruta2').html('Maçã')
                        $('#' + i + ' .fruta3').html('Maçã')
                    }
                    else if (qtdMaca == 2) {
                        $('#' + i + ' .fruta2').html('Maçã')
                        $('#' + i + ' .fruta3').html('Maçã')
                    }
                    else if (qtdMaca == 1) {
                        $('#' + i + ' .fruta3').html('Maçã')
                    }
                    else {
                    }
                }
                else {
                    if (qtdMaca >= 3) {
                        $('#' + i + ' .fruta1').html('Maçã')
                        $('#' + i + ' .fruta2').html('Maçã')
                        $('#' + i + ' .fruta3').html('Maçã')
                    }
                    else if (qtdMaca == 2) {
                        $('#' + i + ' .fruta2').html('Maçã')
                        $('#' + i + ' .fruta3').html('Maçã')
                    }
                    else if (qtdMaca == 1) {
                        $('#' + i + ' .fruta3').html('Maçã')
                    } else {
                    }
                }
                break;
            default:
                console.log('Ocorreu um erro na verificação de aluno')
        }
    }
    $(this).attr("disabled", true)
})

$('#btn-calc').click(function () {
    var totalMaca = 0;
    var totalPera = 0;
    var vazio = 0;

    for (var i = 1; i < 31; i++) {
        //resultado total
        var frutaUm = $('#' + i + ' .fruta1').text()
        var frutaDois = $('#' + i + ' .fruta2').text()
        var frutaTres = $('#' + i + ' .fruta3').text()
        switch (frutaUm) {
            case 'Maçã':
                totalMaca++;
                break;
            case 'Pera':
                totalPera++;
                break;
            default:
                vazio++;
        }
        switch (frutaDois) {
            case 'Maçã':
                totalMaca++;
                break;
            case 'Pera':
                totalPera++;
                break;
            default:
                vazio++;
        }
        switch (frutaTres) {
            case 'Maçã':
                totalMaca++;
                break;
            case 'Pera':
                totalPera++;
                break;
            default:
                vazio++;
        }
    }
    $('.result').fadeIn(500);
    $('#totalMaca').html(totalMaca)
    $('#totalPera').html(totalPera)

})

$('#btn-reset').click(function () {
    location.reload();
})