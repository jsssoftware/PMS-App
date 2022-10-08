import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth-guard/auth.guard';
import { LoginComponent } from './shared/common-component/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent, pathMatch: "full" },
  { path: 'user', 
    loadChildren: () => import('./app-modules/policy-management/motor/motor.module').then(m => m.MotorModule)  
  }, 
  { path: 'subsystem', 
    loadChildren: () => import('./app-modules/sub-system/subsystem.module').then(m => m.SubSystemModule)  
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
