import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  myCards: number[];
  bankCards: number[];
  mcounter: number;
  bcounter:number;
  stackofcards:number[];
  bcard: number;
  card: number;

constructor() {
  this.stackofcards = [1, 1, 1, 1,
    2, 2, 2, 2,
    3, 3, 3, 3,
    4, 4, 4, 4,
    5, 5, 5, 5,
    6, 6, 6, 6,
    7, 7, 7, 7,
    8, 8, 8, 8,
    9, 9, 9, 9,
    10, 10, 10, 10]
  this.myCards = [];
  this.bankCards=[];
  this.mcounter= 0;
  this.bcounter=0;
  this.bcard=-1;
  this.card=-1;
 }
 
 shuffle(){
  this.stackofcards=this.stackofcards.sort(() => Math.random()-0.5);
}

add(){
  this.card=this.card+1;
  this.myCards.push(this.stackofcards[this.card]);
  this.mcounter= this.mcounter+ this.stackofcards[this.card];
  if(this.mcounter == 21)
  {
    alert ("Du hast gewonnen und die Bank verloren.");
  }
  else if(this.mcounter > 21)
  {
    alert ("Du hast verloren und die Bank hat gewonnen.");
  }
  console.log(this.mcounter);
}

return(){
  this.bcard=-1;
  this.card=-1;
  this.mcounter= 0;
  this.bcounter=0;
  this.myCards = [];
  this.bankCards=[];
  this.shuffle();
}

stop(){
  this.bcard=this.bcard+this.myCards.length;
  console.log("länge"+this.myCards.length);
  console.log("start"+this.bcard);
  
   while (this.bcounter<this.mcounter) {
    this.bcard=this.bcard+1;
     this.bankCards.push(this.stackofcards[this.bcard]);
   this.bcounter= this.bcounter+ this.stackofcards[this.bcard];
   if(this.bcounter==21)
     {
       alert ("Die Bank hast gewonnen und du hast verloren.");
     }
     else if(this.bcounter > 21)
     {
       alert ("Du hast gewonnen und die Bank hat verloren.");
     }
     else if(this.bcounter < 21 && this.bcounter > this.mcounter)
     {
       alert ("Die Bank hat gewonnen und du hast verloren.");
     }
   }    
  }
}
