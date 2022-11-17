

export class Pokemon {
  constructor(data) {
    debugger
    this.id = data.id
    this.name = data.name
    this.ability = data.ability || data.abilities || ''
    this.img = data.img || data.sprites.front_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
  }




  get activeTemplate() {
    return `
  <h1 class="text-center mt-5">${this.name}</h1>
  <img class="img-size shadow " src="${this.img}" alt="">
</div>
<div class="card">
<div>${this.ability[0].ability.name}, ${this.ability[1].ability.name}</div>
  <h3>${this.weight}</h3>
  <h3>${this.height}</h3>
  <h3>${this.types[0].type.name}</h3>
</div>
<button class="col-4 bg-danger text-light" onclick="app.sandBoxController.addToMyPokemon()">CATCH!</button>
  `
  }


  get MypokemonTemplate() {
    return `
    <div class="col-3 bg-danger text-light"></div>
    <div class="col-10 selectable p-2 m-3 text-end text-light bg-danger d-flex justify-content-end"
      onclick="app.sandboxController.setOnePoke('${this.id}')"> ${this.name}</div >
      `
  }

  static ListTemplate(pokemon) {
    return `
      <div div onclick = "app.pokemonsController.getOnePokemon('${pokemon.name}')" class=" card bg-danger m-2 text-light selectable p-1" > ${pokemon.name}</div >
        `


  }
  static PlaceholderTemplate() {
    return `<h3 h3 class="text-center" > Please select a pokeman list </h3 > `
  }

}