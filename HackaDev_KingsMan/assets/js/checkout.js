// Cartão de credito
const botaoSelecaoPagamentoCartaoCredito = document.getElementById("cartao-credito");
const pagamentoCartaoDetalhes = document.getElementById("pagamento-cartao-credito");

// Boleto
const botaoSelecaoPagamentoBoleto = document.getElementById("boleto");
const pagamentoBoletoDetalhes = document.getElementById("pagamento-boleto");

// PIX
const botaoSelecaoPagamentoPIX = document.getElementById("pix");
const pagamentoPixDetalhes = document.getElementById("pagamento-pix");

function darCorBotao(botao) {
  botao.style.background = "#dcdfe5";
  botao.style.border = "1px solid #002855";
  botao.style.color = "#002855";
}

function tirarCorBotao(botao) {
  botao.style.background = "#fafafa";
  botao.style.border = "1px solid #dcdfe5";
  botao.style.color = "#dcdfe5";
}

// function abrirFecharSecaoPagamento(secaoAbrir, secaoFechar1, secaoFechar2) {
//   secaoAbrir.style.display = "block";
//   secaoFechar1.style.display = "none";
//   secaoFechar2.style.display = "none";
// }
function abrirFecharSecaoPagamento(secaoAbrir, secaoFechar1, secaoFechar2) {
  if(secaoAbrir.style.display == "block"){
    secaoAbrir.style.display = "none";
    secaoFechar1.style.display = "none";
    secaoFechar2.style.display = "none";
  }else{
    secaoAbrir.style.display = "block";
    secaoFechar1.style.display = "none";
    secaoFechar2.style.display = "none";
  }
}

botaoSelecaoPagamentoBoleto.addEventListener("click", () => {
  darCorBotao(botaoSelecaoPagamentoBoleto);
  tirarCorBotao(botaoSelecaoPagamentoCartaoCredito);
  tirarCorBotao(botaoSelecaoPagamentoPIX);
  setTimeout(
    abrirFecharSecaoPagamento(
      pagamentoBoletoDetalhes,
      pagamentoCartaoDetalhes,
      pagamentoPixDetalhes
    ),
    1000
  );
});

botaoSelecaoPagamentoCartaoCredito.addEventListener("click", () => {
  darCorBotao(botaoSelecaoPagamentoCartaoCredito);
  tirarCorBotao(botaoSelecaoPagamentoBoleto);
  tirarCorBotao(botaoSelecaoPagamentoPIX);
  setTimeout(
    abrirFecharSecaoPagamento(
      pagamentoCartaoDetalhes,
      pagamentoBoletoDetalhes,
      pagamentoPixDetalhes
    ),
    1000
  );
});

botaoSelecaoPagamentoPIX.addEventListener("click", () => {
  darCorBotao(botaoSelecaoPagamentoPIX);
  tirarCorBotao(botaoSelecaoPagamentoCartaoCredito);
  tirarCorBotao(botaoSelecaoPagamentoBoleto);
  setTimeout(
    abrirFecharSecaoPagamento(
      pagamentoPixDetalhes,
      pagamentoCartaoDetalhes,
      pagamentoBoletoDetalhes
    ),
    1000
  );
});

// Detalhes da compra
const botaoDetalhesCompra = document.getElementById("botao-detalhes-da-compra");
const listaDetalheCompra = document.getElementById("lista-produtos");

function abrirDetalhes() {
  listaDetalheCompra.style.display = "block";
}
function fecharDetalhes() {
  listaDetalheCompra.style.display = "none";
}

botaoDetalhesCompra.addEventListener("click", () => {
  if (
    listaDetalheCompra.style.display == "none" ||
    listaDetalheCompra.style.display == ""
  ) {
    abrirDetalhes();
  } else {
    fecharDetalhes();
  }
});
