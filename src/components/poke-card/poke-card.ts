import { Component, Input } from '@angular/core';
import { Pokemon } from './poke-model';

/*
  Generated class for the PokeCard component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'poke-card',
  templateUrl: 'poke-card.html'
})
export class PokeCardComponent {
  @Input() poke: Pokemon;
  // @Input() img: string;
  // @Input() type: string;
  // @Input() dex: string;

  constructor() { }

}
