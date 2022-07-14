import { Component, OnInit } from '@angular/core';
import { PostService } from "../post.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  postList:any;
  constructor(private ps:PostService) { }

  ngOnInit(): void {
    this.ps.getPost().subscribe(
    (res)=>{
      this.postList = res;
      console.log(this.postList)
    },
    (err) => {
      console.log(err);
      alert(err);
    })
    
  }

}
