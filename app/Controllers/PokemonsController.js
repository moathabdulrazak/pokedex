import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawPokemons() {
  let pokemons = appState.pokemons
  console.log(pokemons);
  let template = ''
  pokemons.forEach(p => template += Pokemon.ListTemplate(p))
  setHTML('pokemon', template)
}

function drawActivePokemon() {

  let pokemon = appState.activePokemon
  if (pokemon) {
    setHTML('activePokemon', pokemon.activeTemplate)
  } else {
    setHTML('activePokemon', Pokemon.PlaceholderTemplate)
  }

}


export class PokemonsController {
  constructor() {
    this.getPokemons()
    appState.on('pokemons', _drawPokemons)
    appState.on('activePokemon', drawActivePokemon)
  }


  async getPokemons() {
    try {
      await pokemonsService.getPokemons()

    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }

  async getOnePokemon(name) {
    try {
      await pokemonsService.getOnePokemon(name)

    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }
}