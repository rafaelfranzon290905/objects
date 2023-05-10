const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?
// Vai ser impresso "Matheus Nachtergaele", "Virginia Cavendish" pois tem 4 pessoas no elenco e 4-1 é 3, virginia é a posição 3 e {canal: "Globo", horario: "14h"}


const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console?

// Vai ser impresso {nome: "Juca", idade: 3, raca: "SRD"} , {nome: "Juba", idade: 3, raca: "SRD"} , {nome: "jubo", idade: 3, raca: "SRD"}

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// A sintaxe ... simboliza spread que é uma função que copia todos os elementos dentro de um objeto para a variável onde será usada.

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?

// Ele vai retornar false e undefined pois a altura não foi definida antes.

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// O primeiro retornará false pois a condição backender é false, já o segundo vai voltar undefined pois altura nunca foi dita no objeto.


// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// Exemplo de entrada
// const pessoa1 = {
//     nome: "Vitor Hugo", 
//     apelidos: ["Vitinho", "Vitão", "Vit"]
//  }
 
//  // Exemplo de saída
//  "Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"

const nomeApelido = {
    nome: "Bianca",
    apelidos: ["Bia", "Bi", "Bibi"]
}

function apelidar (objeto) {
    return `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`
}

console.log(apelidar(nomeApelido))

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

let nomeApelido2 = {
    ...nomeApelido,
    apelidos: ["Morbius Amongus", "Sexo", "Pussy destroyer"]
}

console.log(apelidar(nomeApelido2))

// 2. Resolva os passos a seguir: 
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
let profissionais = {
    nome: "Jamira",
    idade: 69,
    profissao: "engenheira"
}
let profissionais2 = {
    nome: "Robson",
    idade: 18,
    profissao: "cabeleireiro"
}

//     b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
    
function arrayProfissoes (objeto) {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
}

console.log(arrayProfissoes(profissionais))
console.log(arrayProfissoes(profissionais2))

//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`

// 3. Resolva os passos a seguir: 
    
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
let carrinho = []

//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
let banana = {
    nome: "banana",
    disponibilidade: true
}
let maca = {
    nome: "maca",
    disponibilidade: true
}
let morango = {
    nome: "morango",
    disponibilidade: true
}

//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.

function receberFruta (objeto) {
    carrinho.push(objeto)
}

receberFruta(banana)
receberFruta(maca)
receberFruta(morango)

// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

console.log(carrinho)
console.log(carrinho.length)