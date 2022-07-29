// declarando componentes dos botoes de colunas
const botaoUmaColuna = document.getElementById("uma-coluna");
const botaoDuasColunas = document.getElementById("duas-colunas");

// Declarando componentes dos itens das colunas
const ladoExteriorProduto = document.getElementsByClassName("item-catalogo");
const fotoInteriorProduto = document.getElementsByClassName("foto-catalogo");
const nomeProdutoItem = document.getElementsByClassName("nome-item");

// Funções que mostra os botões de opção de colunas
function mostrarBotaoDuasColunas() {
  botaoUmaColuna.style.opacity = "0";
  botaoUmaColuna.style.transform;
  setTimeout(() => {
    botaoUmaColuna.style.display = "none";
    botaoDuasColunas.style.display = "block";
    setTimeout(() => {
      botaoDuasColunas.style.opacity = "1";
    }, 10);
  }, 500);
}

function mostrarBotaoUmaColuna() {
  botaoDuasColunas.style.opacity = "0";
  setTimeout(() => {
    botaoDuasColunas.style.display = "none";
    botaoUmaColuna.style.display = "block";
    setTimeout(() => {
      botaoUmaColuna.style.opacity = "1";
    }, 10);
  }, 500);
}

// Funções de aumentar o item do produto e a foto
function aumentarItem() {
  for (let i = 0; i < ladoExteriorProduto.length; i++) {
    let ladoExterior = ladoExteriorProduto[i];
    let fotoInterior = fotoInteriorProduto[i];
    let nomeProduto = nomeProdutoItem[i];
    ladoExterior.style.width = "60vw";
    fotoInterior.style.height = "50vh";
    nomeProduto.style.fontSize = "3vh";
  }
}

function diminuirItem() {
  for (let i = 0; i < ladoExteriorProduto.length; i++) {
    let ladoExterior = ladoExteriorProduto[i];
    let fotoInterior = fotoInteriorProduto[i];
    let nomeProduto = nomeProdutoItem[i];

    ladoExterior.style.width = "40vw";
    fotoInterior.style.height = "35vw";
    nomeProduto.style.fontSize = "2vh";
  }
}

// Chamando evento
botaoDuasColunas.addEventListener("click", () => {
  mostrarBotaoUmaColuna();
  diminuirItem();
});

botaoUmaColuna.addEventListener("click", () => {
  aumentarItem();
  mostrarBotaoDuasColunas();
});
