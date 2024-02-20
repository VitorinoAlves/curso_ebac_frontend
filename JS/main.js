$(document).ready(function(){
    $('#telefone').mask('(00)00000-0000', {placeholder: "(00)00000-0000"});
    $('#cpf').mask('000.000.000-00', {placeholder: "000.000.000-00"});
    $('#cep').mask('00000-000', {placeholder: "00000-000"});

    $('form').on( "submit", function( event ) {
        event.preventDefault();
        alert(`Nome: ${$('#nome').val()} 
                \nE-mail: ${$('#email').val()}
                \nTelefone: ${$('#telefone').val()}
                \nCPF: ${$('#cpf').val()}
                \nEndereço: ${$('#endereco').val()}
                \nCEP: ${$('#cep').val()}`);

        $('#nome').val('');
        $('#email').val('');
        $('#telefone').val('');
        $('#cpf').val('');
        $('#endereco').val('');
        $('#cep').val('');
    });
})