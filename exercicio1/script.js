// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função,
// ou __arrow functions__ 



//Exercício A-------------------------------------------------------------------------

// function olaNome(nome) {
//     console.log(`Olá, ${nome}`)
// }

// olaNome(prompt("Digite seu nome"))


//Exercício B-------------------------------------------------------------------------

 function tabuada(numero) {

     for (let i = 1; i < 11; i++) {
          console.log(i*numero)

 }
   
 }

 tabuada((Number(prompt("Insira um número para ver sua tabuada"))))


//Exercício C-------------------------------------------------------------------------

const olaNome = (nome) => {
    console.log(`Olá, ${nome}`)
}

olaNome(prompt("Digite seu nome"))

//---

const tabuada2 = (numero) => {

    for (let i = 1; i < 11; i++) {
         console.log(i*numero)

}
   
}

tabuada2(6)