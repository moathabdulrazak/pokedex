import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";


const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/"
})
class PokemonsService {
  async getOnePokemon(name) {
    const res = await pokeApi.get(name)
    console.log("This Pokemon Is", res.data);
    appState.activePokemon = new Pokemon(res.data)
    console.log(appState.activePokemon);
  }
  async getPokemons() {
    const res = await pokeApi.get()
    console.log("pokes", res.data);
    appState.pokemons = res.data.results
    console.log("Appstate Pokemon", appState.pokemons);
  }

}







export const pokemonsService = new PokemonsService()