const botaoMenu = document.querySelector("#menu");
const botaoFecharMenu = document.querySelector("#fechar");
const componenteMenuSombra = document.querySelector(".sombra");
const componenteMenuFundo = document.querySelector("#fundo-sair-menu");
botaoMenu.addEventListener("click", () => {
  abrirMenu();
});

function abrirMenu() {
  console.log("abrir menu");
  componenteMenuSombra.style.display = "block";
  componenteCarrinhoSombra.style.display = "none";
  function abrir() {
    componenteMenuSombra.style.opacity = "1";
  }
  setTimeout(abrir, 300);
}

function fecharMenu() {
  console.log("fechar menu");
  componenteMenuSombra.style.opacity = "0";
  function fechar() {
    componenteMenuSombra.style.display = "none";
  }
  setTimeout(fechar, 500);
}

botaoFecharMenu.addEventListener("click", () => {
  fecharMenu();
});

componenteMenuFundo.addEventListener("click", () => {
  fecharMenu();
});

// Abrir e fechar sacola

const botaoSacola = document.querySelector("#sacola");
const componenteCarrinhoSombra = document.querySelector(".sombra-carrinho");
const componenteCarrinhoFundo = document.querySelector("#fundo-sair-carrinho");
const botaoSairCarrinho = document.querySelector("#sair-carrinho");
const navCarrinho = document.querySelector(".carrinho");
const itemNaSacola = document.querySelector(".item-na-sacola");

function AbrirCarrinho() {
  componenteCarrinhoSombra.style.display = "block";
  componenteMenuSombra.style.display = "block";
  itemNaSacola.style.display = "none";
  function abrir() {
    componenteCarrinhoSombra.style.opacity = "1";
  }
  setTimeout(abrir, 300);
}

function fecharCarrinho() {
  componenteCarrinhoSombra.style.opacity = "0";

  function fechar() {
    componenteCarrinhoSombra.style.display = "none";
    itemNaSacola.style.display = "block";
  }
  setTimeout(fechar, 500);
}

botaoSacola.addEventListener("click", () => {
  AbrirCarrinho();
});

botaoSairCarrinho.addEventListener("click", () => {
  fecharCarrinho();
});

componenteCarrinhoFundo.addEventListener("click", () => {
  fecharCarrinho();
});
