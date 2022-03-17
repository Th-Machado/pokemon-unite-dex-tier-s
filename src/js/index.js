/*
Quando clicar no pokémon da listagem a direita, o cartão atual abeto deverá ser escondido, e um cartão fechado correspondente ao selecionado deverá ser aberto

para isso será necessário trabalhar com dois elementos:
1 - listagem 
2 - cartão do pokémon

precisamos criar duas váriaveis no JS para trabalhar com os elemnentos da tela 

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémon

- remover a classe aberto somente do cartão que está aberto

- ao clicar em algum pokémon da listagem, pegamos o id desse pokémon para saber qual cartão mostrar

- remover a classe ativo que marca o pokémon selecionado

-adicionar a classe ativo no item da lista selecionado
*/


const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () =>{
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})