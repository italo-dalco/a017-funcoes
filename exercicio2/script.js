// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função,
// faça a soma das duas entradas e imprima o resultado.Invoque a função
// e imprima no console o resultado.

// b) Uma função que recebe 2 números e imprime um booleano que informa
// se o primeiro número é **maior ou igual** ao segundo.

// c) Uma função que receba um número e imprima se ele é par ou não

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima
// o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.


// -----------------------------------------------------------------------------------------

//Exercício A

function doisNumeros(num1 , num2) {
    const soma = num1 + num2
        console.log(soma)
}

doisNumeros(8,10)


// -----------------------------------------------------------------------------------------

//Exercício B

function doisNumeros2(num1 , num2) {
    const compare = num1 >= num2
        console.log(compare)
}

doisNumeros2(10 , 5)


// -----------------------------------------------------------------------------------------

//Exercício C

function numeroPar(num) {
    const result = num % 2 === 0
        console.log(result)
}

numeroPar(10)


// -----------------------------------------------------------------------------------------

//Exercício D

function mensagem(string){
    const verificaCaracteres = string.length
        console.log(verificaCaracteres, string.toUpperCase())
}

mensagem(prompt("Insira aqui uma mensagem."))