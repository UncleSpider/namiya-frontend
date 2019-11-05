import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'user', loadChildren: () => import('./pages/common-user/common-user.module').then(m => m.CommonUserModule) },
  { path: 'volunteer', loadChildren: () => import('./pages/volunteer/volunteer.module').then(m => m.VolunteerModule) },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
