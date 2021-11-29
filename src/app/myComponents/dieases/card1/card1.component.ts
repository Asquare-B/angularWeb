import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit ,Input} from '@angular/core';
import { Data } from '@angular/router';
import { guidlines } from 'src/app/class';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {
 // @Input()
  //d: guidlines = new guidlines;
  //im : guidlines[] | undefined;
   i:number=2;
   n=1

  increment(){
    if(this.n !=5){
      this.n++;
      this.i=this.n;
    }
  }
  public im=['https://www.halza.com/wp-content/uploads/2021/01/Blog-thumbnail-thyroid-1-722x-1.jpg',
              'https://image.slidesharecdn.com/asthma-191018135330/95/asthma-1-638.jpg?cb=1571640658',
              'https://simshospitals.com/wp-content/uploads/2020/04/pneumonia-concept.jpg',
              'https://www.parashospitals.com/wp-content/uploads/2017/02/Blood-Cancer.jpg',
              'https://image.slidesharecdn.com/poooo-170224191427/95/malaria-1-638.jpg?cb=1487963703']
  ngOnInit(): void {
  }

}