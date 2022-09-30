import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth-guard/auth.guard';
import { LoginComponent } from './app-modules/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent, pathMatch: "full" },
  { path: 'user', 
  loadChildren: () => import('./app-modules/motor/motor.module').then(m => m.MotorModule) 
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
