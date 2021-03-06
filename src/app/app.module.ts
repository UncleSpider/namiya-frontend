// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonUserModule } from './pages/common-user/common-user.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { VolunteerModule } from './pages/volunteer/volunteer.module';
import { AdminModule } from './pages/admin/admin.module';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonUserModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    VolunteerModule,
    AdminModule
  ],
  providers   : [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
