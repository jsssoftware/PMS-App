import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/common-component/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent, pathMatch: "full" },
  { path: 'user', 
    loadChildren: () => import('./app-modules/dashboard/systeminitial.module').then(m => m.SystemInitialModule)  
  },
  { path: 'policymanagement', 
    loadChildren: () => import('./app-modules/policy-management/motor/motor.module').then(m => m.MotorModule)  
  }, 
  { path: 'subsystem', 
    loadChildren: () => import('./app-modules/sub-system/subsystem.module').then(m => m.SubSystemModule)  
  }, 
  { path: 'master', 
    loadChildren: () => import('./app-modules/master/master.module').then(m => m.MasterModule)  
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
