import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  serviceList:any;
  isVisible:boolean;
  constructor() { 
    this.isVisible = true;
  }

  ngOnInit(): void {
    this.serviceList = [
      {
        imgurl:'img_avatar1.png',
        title:"John Doe",
        desc:"Some example text."
      },
      {
        imgurl:'img_avatar1.png',
        title:"John Doe",
        desc:"Some example text."
      },
      {
        imgurl:'img_avatar1.png',
        title:"John Doe",
        desc:"Some example text."
      },
      {
        imgurl:'img_avatar1.png',
        title:"John Doe",
        desc:"Some example text."
      },
      {
        imgurl:'img_avatar1.png',
        title:"John Doe",
        desc:"Some example text."
      },
       {
        imgurl:'img_avatar1.png',
        title:"John Doe",
        desc:"Some example text."
      }
    ]
  }

}
