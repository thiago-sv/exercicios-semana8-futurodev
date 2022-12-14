
const forca = document.createElement('p')
const ataque = document.createElement('p')
const defesa = document.createElement('p')
const ataqueEspecial = document.createElement('p')
const defesaEspecial = document.createElement('p')
const velocidade = document.createElement('p')
const paragrafo = document.createElement('p')

let pikachu = document.getElementById('pikachu').value
let bulbasaur = document.getElementById('bulbasaur').value
let groudon = document.getElementById('groudon').value

let nomePokemon = ''
let element = document.getElementById('btn')
//document.querySelector('input[name="rate"]:checked').value;
element.addEventListener("click", () => {
    let aux = document.getElementsByName('pokemon');

    for (i = 0; i < aux.length; i++) {
        if (aux[i].checked)
            nomePokemon = aux[i].value;
    }
    pegaPoke(nomePokemon)

})
async function pegaPoke(poke) {
    pokemon = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)).json()
    console.log(pokemon)
    let elemento = document.getElementById('div')
    elemento.innerHTML = " "
    if (pokemon.name) {
        for (const key in pokemon.stats) {
            const stat = pokemon.stats[key].stat.name
            const baseStat = pokemon.stats[key].base_stat
            const paragrafo = document.createElement('p')
            paragrafo.innerHTML = `${stat}: ${baseStat} `
            document.getElementById('div').appendChild(paragrafo)

        }
    }
    else {
        console.log("Ocorreu um erro")
    }
}
