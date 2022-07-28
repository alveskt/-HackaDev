function buscaCep() {
  let cep = document.getElementById("endereco-cep");
  let valorCep = cep.value;

  if (valorCep !== "") {
    let url = `https://brasilapi.com.br/api/cep/v1/${valorCep}`;

    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();

    // Tratar resposta
    req.onload = function () {
      if (req.status === 200) {
        let endereco = JSON.parse(req.response);
        document.getElementById("endereco").value = endereco.street;
        document.getElementById("endereco-cidade").value = endereco.city;
        document.getElementById("endereco-bairro").value =
          endereco.neighborhood;
        document.getElementById("endereco-estado").value = endereco.state;
      } else if (req.status === 404) {
        cep.value = "Este código postal é invalido";
        cep.style.color = "crimson";
        setTimeout(() => {
          cep.style.color = "#161616";
          cep.value = "";
        }, 1500);
      } else {
        cep.value = "Há algo errado";
      }
    };
  } else {
    cep.value = "Insira um CEP";
    cep.style.color = "crimson";
    setTimeout(() => {
      cep.style.color = "#161616";
      cep.value = "";
    }, 1500);
  }
}

window.onload = function () {
  let txtCep = document.getElementById("endereco-cep");

  txtCep.addEventListener("blur", buscaCep);
};
