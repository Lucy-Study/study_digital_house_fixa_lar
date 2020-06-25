const inputZip = document.getElementById('inputZip');

inputZip.addEventListener('blur', function (e) {
  // stop natural event
  e.preventDefault();
  const valorDoCep = inputZip.value;
  const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return pesquisacep(data);
    })

  });

  function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('inputAddress').value = ("");
     document.getElementById('inputState').value=("");
    document.getElementById('inputZip').value = ("");
  }

  function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
      //Atualiza os campos com os valores.
      document.getElementById('inputAddress').value = (conteudo.logradouro);
      document.getElementById('inputCity').value = (conteudo.localidade);
      document.getElementById('inputState').value=(conteudo.uf);

    } //end if.
    else {
      //CEP não Encontrado.
      limpa_formulário_cep();
      alert("CEP não encontrado.");
    }
  }

  function pesquisacep(data) {
    let valor = data.cep
    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('inputAddress').value = "...";
        document.getElementById('inputCity').value = "...";
        document.getElementById('inputState').value = "...";
        
        meu_callback(data)

      } //end if.
      else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
      }
    } //end if.
    else {
      //cep sem valor, limpa formulário.
      limpa_formulário_cep();
    }
  }

