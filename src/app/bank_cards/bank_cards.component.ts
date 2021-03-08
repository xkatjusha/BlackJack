import { Component, Input,} from '@angular/core';

@Component({
  selector: 'app-bank_cards',
  templateUrl: './bank_cards.component.html',
  styleUrls: ['./bank_cards.component.scss']
})
export class Bank_cardsComponent {
  @Input() number:number;
  constructor() { }


}
