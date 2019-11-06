import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerRoutingModule } from './volunteer-routing.module';
import { VolunteerComponent } from './volunteer.component';
<<<<<<< HEAD
import { NgZorroAntdModule } from 'ng-zorro-antd';
=======
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d


@NgModule({
  declarations: [VolunteerComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
    VolunteerRoutingModule,
    NgZorroAntdModule
=======
    VolunteerRoutingModule
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
  ]
})
export class VolunteerModule { }
