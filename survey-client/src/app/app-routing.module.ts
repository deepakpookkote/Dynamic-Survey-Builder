import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateFormsComponent } from './components/create-forms/create-forms.component';
import { GuestFormsComponent } from './components/guest-forms/guest-forms.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { SuccessWindowComponent } from './components/sucess-window/sucess-window.component';
import { ViewFormRegistrationsComponent } from './components/view-form-registrations/view-form-registrations.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'create', component: CreateFormsComponent, canActivate: [AuthGuard]},
  { path: 'generate/:id', component: GuestFormsComponent},
  { path: 'view-registrations', component: ViewRegistrationComponent, canActivate: [AuthGuard]},
  { path: 'view-form-info/:id', component: ViewFormRegistrationsComponent, canActivate: [AuthGuard]},
  { path: 'success', component: SuccessWindowComponent},
  { path: 'auth', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
