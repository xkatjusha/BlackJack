import { RulesService } from './../rules.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  mcounter: number;
  bcounter: number;
  constructor(public rules: RulesService) {
    this.mcounter=this.rules.mcounter;
    this.bcounter=this.rules.bcounter;
   }


}
