const produtos = [
  { nome: "Vinho Tinto Reserva Malbec", preco: 79.90, categoria: "Vinho tinto", disponibilidade: true },
  { nome: "Vinho Tinto Cabernet Sauvignon", preco: 89.90, categoria: "Vinho tinto", disponibilidade: false },
  { nome: "Vinho Tinto Merlot", preco: 59.90, categoria: "Vinho tinto", disponibilidade: true },
  { nome: "Vinho Tinto Syrah", preco: 72.50, categoria: "Vinho tinto", disponibilidade: true },

  { nome: "Vinho Branco Chardonnay", preco: 64.90, categoria: "Vinho branco", disponibilidade: true },
  { nome: "Vinho Branco Sauvignon Blanc", preco: 58.00, categoria: "Vinho branco", disponibilidade: false },
  { nome: "Vinho Branco Riesling", preco: 66.70, categoria: "Vinho branco", disponibilidade: true },
  { nome: "Vinho Branco Pinot Grigio", preco: 61.30, categoria: "Vinho branco", disponibilidade: true },

  { nome: "Vinho Rosé Provence", preco: 69.90, categoria: "Vinho rosé", disponibilidade: true },
  { nome: "Vinho Rosé Tempranillo", preco: 57.80, categoria: "Vinho rosé", disponibilidade: true },
  { nome: "Vinho Rosé Zinfandel", preco: 55.60, categoria: "Vinho rosé", disponibilidade: true },
  { nome: "Vinho Rosé Pinot Noir", preco: 63.40, categoria: "Vinho rosé", disponibilidade: false },
];

const sections = ['Vinho tinto', 'Vinho branco', 'Vinho rosé'];

const filtroForm = document.getElementById("filtroForm");
const categorias = document.getElementById("categoria");
const ordenar = document.getElementById("ordenar");
const exibirTodos = document.getElementById("exibirTodos");
const btnListarTodos = document.getElementById("btnListarTodos");
const produtosContainer = document.getElementById("produtosContainer");

function exibirProdutos(lista) {
  produtosContainer.innerHTML = "";

  sections.forEach(function(section) {
    const produtosDaSecao = lista.filter(function(produto) {
      return produto.categoria === section;
    });

    if (produtosDaSecao.length > 0) {
      produtosContainer.innerHTML += `<h2 class="tituloSection">${section}</h2>`;
      let cardsHTML = '<div class="cardsContainer">';

      produtosDaSecao.forEach(function(produto) {
        cardsHTML += `
          <div class="cardProduto">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <p>Categoria: ${produto.categoria}</p>
            <p>Disponibilidade: ${produto.disponibilidade ? "Sim" : "Não"}</p>
          </div>
        `;
      });

      cardsHTML += '</div>';
      produtosContainer.innerHTML += cardsHTML;
    }
  });

  adicionarHoverNosCards(); 
}

function adicionarHoverNosCards() {
  var cards = document.querySelectorAll('.cardProduto');

  cards.forEach(function(card) {
    card.addEventListener('mouseover', function() {
      card.style.backgroundColor = '#e0f7fa';
      card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
    });

    card.addEventListener('mouseout', function() {
      card.style.backgroundColor = '';
      card.style.boxShadow = '';
    });
  });
}

exibirProdutos(produtos);

filtroForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let listaFiltrada = produtos;

  if (categorias.value !== "todos") {
    const categoriaSelecionada = categorias.value === "vinhoT" ? "Vinho tinto" :categorias.value === "vinhoB" ? "Vinho branco" : categorias.value === "vinhoR" ? "Vinho rosé" : "";

    listaFiltrada = listaFiltrada.filter(function(produto) {
      return produto.categoria === categoriaSelecionada;
    });
  }

  if (exibirTodos.checked) {
    listaFiltrada = listaFiltrada.filter(function(produto) {
      return produto.disponibilidade === true;
    });
  }
  
  if (ordenar.value === "precoCrescente") {
    listaFiltrada.sort(function(a, b) {
      return a.preco - b.preco;
    });
  } else if (ordenar.value === "precoDecrescente") {
    listaFiltrada.sort(function(a, b) {
      return b.preco - a.preco;
    });
  }

  exibirProdutos(listaFiltrada);
});

btnListarTodos.addEventListener("click", function() {
  categorias.value = "todos";
  ordenar.value = "precoCrescente";
  exibirTodos.checked = true;

  exibirProdutos(produtos);
});
