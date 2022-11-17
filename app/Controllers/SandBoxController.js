import { appState } from "../AppState.js";
import { sandBoxService } from "../Services/SandBoxService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawMyPokemons() {
  let pokemons = appState.myPokemon
  let template = ''
  pokemons.forEach(p => template += p.MypokemonTemplate)
  setHTML("my-poke", template)
}

export class SandBoxController {
  constructor() {
    // appState.on('myPokemon', )
    appState.on('myPokemon', _drawMyPokemons)
  }


  async addToMyPokemon() {
    try {
      debugger
      await sandBoxService.addToMyPokemon()
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }

  setOnePoke(id) {
    sandBoxService.setOnePoke(id)
  }

}