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
const listaProdutos = document.getElementById("listaProdutos")
const filtroForm = document.getElementById("filtroForm")
const categorias = document.getElementById("categoria")
const ordenar = document.getElementById("ordenar")
const exibirTodos = document.getElementById("exibirTodos")
const btnListarTodos = document.getElementById("btnListarTodos")
const btnFiltrar = document.getElementById("btnFiltrar")
const produtosContainer = document.getElementById("produtosContainer")
// const apenasDisponiveis = document.getElementById("apenasDisponiveis").checked;

function exibirProdutos(lista){
  produtosContainer.innerHTML = ""

  const categoriasUnicas = [...new Set(lista.map(produto => produto.categoria))]
  
  categoriasUnicas.forEach(function(section) {
    produtosContainer.innerHTML += `<h2 class="tituloSection">${section}</h2>`

    let cardsHTML = '<div class="cardsContainer">'

    lista.forEach(function(produto) {
      if (produto.categoria === section){
        cardsHTML += `
        <div class="cardProduto">
          <h3>${produto.nome}</h3>
          <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
          <p>Categoria: ${produto.categoria}</p>
          <p>Disponibilidade: ${produto.disponibilidade ? "Sim" : "Não"}</p>
        </div>`
      }
    })

    cardsHTML += '</div>' 

    produtosContainer.innerHTML += cardsHTML
  })
}
exibirProdutos(produtos)

btnListarTodos.addEventListener("click", function(){
  exibirProdutos(produtos)
})
btnFiltrar.addEventListener("click", event => {
  event.preventDefault();

  let listaFiltrada = produtos;

  const categoriaSelecionada = categorias.value;
  const ordenarPor = ordenar.value;
  const mostrarIndisponiveis = exibirTodos.checked;

  if (categoriaSelecionada !== "todos") {
    if (categoriaSelecionada === "vinhoT") {
      listaFiltrada = listaFiltrada.filter(p => p.categoria === "Vinho tinto");
    } else if (categoriaSelecionada === "vinhoB") {
      listaFiltrada = listaFiltrada.filter(p => p.categoria === "Vinho branco");
    } else if (categoriaSelecionada === "vinhoR") {
      listaFiltrada = listaFiltrada.filter(p => p.categoria === "Vinho rosé");
    }
  }

  if (!mostrarIndisponiveis) {
    listaFiltrada = listaFiltrada.filter(p => p.disponibilidade);
  }

  if (ordenarPor === "precoCrescente") {
    listaFiltrada.sort((a, b) => a.preco - b.preco);
  } else if (ordenarPor === "precoDecrescente") {
    listaFiltrada.sort((a, b) => b.preco - a.preco);
  }

  exibirProdutos(listaFiltrada);
});