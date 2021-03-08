import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { My_cardsComponent } from './my_cards/my_cards.component';
import { Bank_cardsComponent } from './bank_cards/bank_cards.component';
import { CounterComponent } from './counter/counter.component';
import { StackComponent } from './stack/stack.component';

@NgModule({
  declarations: [				
    AppComponent,
      My_cardsComponent,
      Bank_cardsComponent,
      CounterComponent,
      StackComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
