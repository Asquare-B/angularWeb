import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {
  i:number=2;
  n=1

 increment(){
   if(this.n !=5){
     this.n++;
     this.i=this.n;
   }
 }
  public im=['thyroid symptoms',
  'asthma symptoms',
  'Pnemonia is lung disorder',
  'https://www.parashospitals.com/wp-content/uploads/2017/02/Blood-Cancer.jpg',
  'https://image.slidesharecdn.com/poooo-170224191427/95/malaria-1-638.jpg?cb=1487963703']
  constructor() { }

  ngOnInit(): void {
  }

}
