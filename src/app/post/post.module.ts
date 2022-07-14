import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { IndexComponent } from './index/index.component';
import { DisplayComponent } from './display/display.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { HttpClientModule } from "@angular/common/http";

import { FormsModule,ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    IndexComponent,
    DisplayComponent,
    CreateComponent,
    EditComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
