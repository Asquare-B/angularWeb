import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  i:number=0;
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
  // data : guidlines[] | undefined;
  constructor() { 
    // this.data = [
    //   {
    //     img: "hhttps://image.slidesharecdn.com/alzheimersdisease-110328212723-phpapp02/95/alzheimers-disease-management-1-728.jpg?cb=1301347767"
    //   }
     
    //]
   }
  ngOnInit(): void {
  }

}
