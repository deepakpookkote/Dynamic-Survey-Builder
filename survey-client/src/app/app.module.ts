import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';

/** Importing custom helper modules */

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

/** Importing services */
import { HttpInterceptorService } from './helpers/interceptor.service';
import { NavbarComponent } from './directives/navbar/navbar.component';
import { CreateFormsComponent } from './components/create-forms/create-forms.component';
import { GuestFormsComponent } from './components/guest-forms/guest-forms.component';
import { FormDataComponent } from './components/guest-forms/form-data/form-data.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { SuccessWindowComponent } from './components/sucess-window/sucess-window.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    CreateFormsComponent,
    GuestFormsComponent,
    FormDataComponent,
    ViewRegistrationComponent,
    SuccessWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DynamicFormBuilderModule
  ],
  exports: [ NavbarComponent ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
