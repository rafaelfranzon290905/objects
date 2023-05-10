const endereço = {
    rua: "rua do bobo",
    numero: 0,
    cidade: "São Leopoldo",
    estado: "Rio Grande do sul",
}

const usuario = {
    nome: "mariana",
    idade: 16,
    endereço: endereço,
    senha: "senha123"
}

console.log(usuario)

usuario.nome = "José"

console.log(usuario)

let filme = {
    direcao: "David Fincher",
    nome: "Clube da luta",
    anoLancamento: 1999,
    elenco: ["Bradd Pitt", "Edward Norton", "Helena Bonham"],
    assistiu: true
}

console.log(filme)
console.log(filme.direcao)
console.log(filme["nome"])
console.log(filme.anoLancamento)
console.log(filme["elenco"])
console.log(filme.assistiu)

let pessoa = {
    nome: "Rodolfo",
    idade: 18,
    genero: "Sertanejo",

}

console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.genero}`)

// const produtos = [
//     {id: 1, nome: "Teclado mecânico da razer", preço: 300},
//     {id: 2, nome: "Monitor dell, 21 polegadas", preço: 3000},
//     {id: 3, nome: "Mouse logitech g403", preço: 400},
// ]
// console.log(produtos);

// produtos[0].quantidade = 20
// produtos[1].quantidade = 20
// produtos[2].quantidade = 20

// console.log(produtos)

// const produto = {
//     id:1,
//     nome: "teclado mecanico da razer",
//     preco: 30
// };
// console.log(produto)

// const produto2 = {
//     ...produto,

// };

// console.log(produto2)

const id = prompt("Digite o id do produto")
const nomePrdouto = prompt("Digite o nome do produto")
const preço = Number(prompt("Digite o preço"))

let produtos = []

function dicionarProduto(id, nome, preco){
    const produto = {
        idProduto: id,
        nomeProduto: nomePrdouto,
        precoProduto: preço
    }
    produtos.push(produto)
}

dicionarProduto(id, nomePrdouto, preço)
console.log(produtos)

function pessoa4 (pessoa){
    let copia ={
        ...pessoa
    }
    copia.comida = ["sushi", "massa", "pizza"]
    copia.amigo = {nome: "Arthur", idade: 19}
    console.log(`O nome da pessoa é ${copia.nome} e suas comidas preferidas são ${copia.comida[0]}, ${copia.comida[1]} e ${copia.comida[2]}. Seu melhor amigo se chama ${copia.amigo.nome} e tem ${copia.amigo.idade} anos`)
}

pessoa4(pessoa)


