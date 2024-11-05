$(document).ready(function() {
    $('#buscar').click(function(){
        var cep = $('#cep').val();

        if(/^\d{8}$/.test(cep)){
            $.getJSON(`https://viacep.com.br/ws/${cep}/json/`,function(dados){
                if(!dados.erro){
                $('#logradouro').val(dados.logradouro);
                $('#complemento').val(dados.complemento);
                $('#bairro').val(dados.bairro);
                $('#localidade').val(dados.localidade);
                $('#uf').val(dados.uf);
                $('#regiao').val(dados.regiao);
                $('#ddd').val(dados.ddd);
            }else{
                alert("CEP não encontrado");
            }  
        });
        }else{
            alert("CEP invalido.");
        }
    });

});