import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { guidlines } from 'src/app/class';

@Component({
  selector: 'app-homeslider',
  templateUrl: './homeslider.component.html',
  styleUrls: ['./homeslider.component.css']
})
export class HomesliderComponent implements OnInit {

  data : guidlines[] | undefined;
  constructor() {
    this.data = [
      {
        title : "Wear mask all time",
        img : "assets/images/mask.png",
        content: "Person should where mask whenever goes out"
      },
      {
        title : "Wash hands frequently",
        img : "assets/images/mask.png",
        content: "You should wash your hand for 1 min every 2hours"
      },
      {
        title : "Scocial distance",
        img : "assets/images/mask.png",
        content: "Maintain atleast 2m distance between you and other person"
      },
      {
        title : "Dont touch your face",
        img : "assets/images/mask.png",
        content: "Never touch your face without cleaning it first"
      }
    ]
   }

  ngOnInit(): void {
  }

}
