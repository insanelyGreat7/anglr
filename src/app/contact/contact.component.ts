import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted:boolean = false;

  constructor(private formBuilder: FormBuilder) { 
    this.contactForm = this.formBuilder.group({
      fname:['',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]],
      lname :['',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]],
      comment:['',[Validators.required,Validators.minLength(10),Validators.maxLength(15)]],
    })
  }
  ngOnInit(): void {
    
  }
  get f() {
    return this.contactForm.controls;
  }
  validateContactForm(){
    //logic
    this.submitted = true;
    if(this.contactForm.invalid){
      return;
    }
    console.log(this.contactForm.value)
  }

}
