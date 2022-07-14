import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { Router } from "@angular/router";

//service import
import { PostService } from "../post.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  postForm: FormGroup;
  submitted:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private ps:PostService,
    private router: Router
    ) { 
    this.postForm = this.formBuilder.group({
      title:['',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]],
      body :['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  get f() {
    return this.postForm.controls;
  }
  validatePostForm(){
    //logic
    this.submitted = true;
    if(this.postForm.invalid){
      return;
    }
    console.log(this.postForm.value)
    //api calling to post the postdetails
    this.ps.createNewPost(this.postForm.value).subscribe(
      (res)=>{
        alert("Post created succefully!");
        this.router.navigateByUrl('post/index');
      },
      (err)=>{
        alert(err)
      }
    )
  }
}
