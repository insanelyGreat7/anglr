import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './post/index/index.component';

const routes: Routes = [
  {
    path:"",
    component: IndexComponent
    // component: AppComponent,
    // children:[
    //   {
    //     path:"",
    //     component:IndexComponent
    //   }
    // ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
