import { PokemonsController } from "./Controllers/PokemonsController.js";
import { SandBoxController } from "./Controllers/SandBoxController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  pokemonsController = new PokemonsController();
  sandBoxController = new SandBoxController();
}

window["app"] = new App();
