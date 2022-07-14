import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '',component:HomeComponent
  },
  {
    path: 'about',component:AboutComponent
  },
  {
    path: 'services',component:ServicesComponent
  },
  {
    path: 'blog',component:BlogComponent
  },
  {
    path: 'clients',component:ClientsComponent
  },
  {
    path: 'contact',component:ContactComponent
  },
  {
    path: 'register',component:RegisterComponent
  },
  {
    path:'**', component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
