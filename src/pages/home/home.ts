import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Pokemon } from '../../components/poke-card/poke-model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pokemon: Array<Pokemon>;

  constructor(public navCtrl: NavController) {
    this.pokemon = [
      new Pokemon("assets/img/bulbasaur.jpg", "glass", "Plant in back"),
      new Pokemon("assets/img/charmander.jpg", "fire", "Flame in back"),
      new Pokemon("assets/img/pikachu.jpg", "electric", "Electric in back"),
      new Pokemon("assets/img/squirtle.jpg", "water", "vamo a calmarno"),
    ]
  }

}
