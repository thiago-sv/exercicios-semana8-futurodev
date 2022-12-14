
let numeros = [25, 64, 4, 9, 81, 36, 49, 0, 100, 121, 16];

// 1 - Crie funções utilizando arrow functions que retorne em um novo array e em ordem crescente:
// - O dobro de cada valor dentro desse array 
// - A metade de cada valor dentro desse array 
// - A raiz de cada valor dentro desse array

let dobro = numeros.map((num) => num * 2).sort((a, b) => a - b);
console.log(dobro);

let metade = numeros.map((num) => num / 2).sort((a, b) => a - b);
console.log(metade);

let raiz = numeros.map((num) => Math.sqrt(num)).sort((a, b) => a - b);
console.log(raiz);

// 3 - Escreva uma função chamada juntarObjetos que aceita como parametro dois objetos e retorna um novo objeto
// que contém todas as chaves e valores do primeiro objeto e do segundo objeto.

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };

function juntarObjetos(ob1, ob2) {
    return { ...ob1, ...ob2 };
}

console.log(juntarObjetos(obj1, obj2));


//4 - Escreva uma função chamada encontrarMinimo que aceita um array de números como parâmetro e retorna o menor argumento

function encontrarMinimo(array) {
    return Math.min(...array);
}

console.log(encontrarMinimo(numeros));

//funcionalidade de pesquisar CEP's, onde após eu preencher um input e clicar em um botão este deverá fazer a requisição para uma API
//Deve-se aguardar a resposta da API
//Se tiver sucesso na requisição, a aplicação deverá mostrar todos os dados retornados dentro de uma div.
//Se tivermos falha na requisição, devemos imprimir a mensagem de erro no console.
//Recomenda-se a utilização da API do BrasilAPI:
//https://brasilapi.com.br/docs#api-endpoints-cep

const cep = document.querySelector("#cep");
const btn = document.querySelector("#btn");
const div = document.querySelector("#resultado");

btn.addEventListener("click", () => {
    fetch(`https://brasilapi.com.br/api/cep/v1/${cep.value}`)
        .then((response) => response.json())
        .then((data) => {
            div.innerHTML = `
            <p>CEP: ${data.cep}</p>
            <p>Estado: ${data.state}</p>
            <p>Cidade: ${data.city}</p>
            <p>Bairro: ${data.neighborhood}</p>
            <p>Rua: ${data.street}</p>
            `;
        })
        .catch((error) => console.log(error));
});

