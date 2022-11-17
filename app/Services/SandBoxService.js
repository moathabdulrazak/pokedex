import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { Pop } from "../Utils/Pop.js"


const sandBoxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/moath/pokemon"
})



class SandBoxService {
  setOnePoke(id) {
    let poke = appState.myPokemon.find(p => p.id == id)
    appState.activePokemon = poke
  }
  async addToMyPokemon() {

    let pokemon = appState.activePokemon
    const res = await sandBoxApi.post('', pokemon)
    console.log("add poke", res.data);
    appState.myPokemon = [...appState.myPokemon, new Pokemon(res.data)]
    Pop.toast('Poke been added')
  }

}







export const sandBoxService = new SandBoxService()