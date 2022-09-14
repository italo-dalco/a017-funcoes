// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar
// o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções
// com esses valores inputados pelo usuário sendo o argumento.
// Por fim, imprima no console o resultado das operações


//-----------------------------------------------------------------------------


function calc1(num1 , num2) {
    const soma = num1 + num2
        console.log(soma)
            alert(`O resultado da soma é: ${soma}`)
}

//calc1(10 , 5)

calc1(Number(prompt("Insira o primeiro número para ser somado")) , Number(prompt("Insira o segundo número para ser somado")))

//---

function calc2(num1 , num2) {
    const subtra = num1 - num2
        console.log(subtra)
            alert(`O resultado da subtração é: ${subtra}`)

}

//calc2(10 , 8)

calc2(Number(prompt("Insira o primeiro número para ser subtraído")) , Number(prompt("Insira o segundo número para ser subtraído")))


//---

function calc3(num1 , num2) {
    const multi = num1 * num2
        console.log(multi)
            alert(`O resultado da multiplicação é: ${multi}`)
}

//calc3(5 , 5)

calc3(Number(prompt("Insira o primeiro número para ser multiplicado")) , Number(prompt("Insira o segundo número para ser multiplicado")))


//---

function calc4(num1 , num2) {
    const divi = num1 / num2
        console.log(divi)
            alert(`O resultado da divisão é: ${divi}`)

}

//calc4(10 , 2)

calc4(Number(prompt("Insira o primeiro número para ser dividido")) , Number(prompt("Insira o segundo número para ser dividido")))
