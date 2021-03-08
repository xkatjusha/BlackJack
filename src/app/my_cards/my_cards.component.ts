import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-my_cards',
  templateUrl: './my_cards.component.html',
  styleUrls: ['./my_cards.component.scss']
})
export class My_cardsComponent {
  @Input() number:number;
  constructor() { }
}
