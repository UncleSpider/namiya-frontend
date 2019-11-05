import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonUserComponent } from './common-user.component';


const routes: Routes = [
  {path: '', component: CommonUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonUserRoutingModule { }
