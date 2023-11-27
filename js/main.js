function consultaCep() {

    let cep = document.querySelector('#cep').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cep.trim().length !== 8) {
        alert('Digite um CEP válido contendo 8 números');
        document.querySelector('#cep').value = "";
        return;
    }

    fetch(url).then((response) => {
        response.json()
            .then(data => {
                mostrarEndereco(data);
            })
    });
}

function mostrarEndereco(data) {
    let inputLogradouro = document.getElementById('inputLogradouro');
    inputLogradouro.value = data.logradouro;
    let inputComplemento = document.getElementById('inputComplemento');
    inputComplemento.value = data.complemento;
    let inputCidade = document.getElementById('inputCidade');
    inputCidade.value = data.localidade;
    let inputUF = document.getElementById('inputUF');
    inputUF.value = data.uf;
    let inputBairro = document.getElementById('inputBairro');
    inputBairro.value = data.bairro;
}