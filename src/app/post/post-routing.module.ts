import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:"post",redirectTo:"post/index", pathMatch:'full'
  },
  {
    path:'post/index', component:IndexComponent
  },
  {
    path:'post/:postId/view', component:DisplayComponent
  },
  {
    path:'post/create-new', component:CreateComponent
  },
  {
    path:'post/:postId/edit', component:EditComponent
  },
  {
    path:"**",component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
