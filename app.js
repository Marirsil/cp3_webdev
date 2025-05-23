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


sections.forEach(function(section) {
  produtosContainer.innerHTML += `<h2 class="titulo-section">${section}</h2>`

  produtos.forEach(function(produto) {
    if (produto.categoria === section){
      produtosContainer.innerHTML += `
      <div class="card-produto">
        <h3>${produto.nome}</h3>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        <p>Categoria: ${produto.categoria}</p>
        <p>Disponibilidade: ${produto.disponibilidade ? "Sim" : "Não"}</p>
      </div>`
    }
  })
})