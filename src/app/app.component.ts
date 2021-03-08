import { RulesService } from './rules.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blackjack21';
  constructor(public rules: RulesService) {
  }
}
