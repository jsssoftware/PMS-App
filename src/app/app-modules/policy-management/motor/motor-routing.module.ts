import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth-guard/auth.guard'; 
import { MotorPolicyComponent } from './motor-policy-data/motor-policy.component';
import { MotorPolicyManagementComponent } from './motor-policy-management/motor-policy-management.component';
  
const routes: Routes = [
  {
    path: 'pms',  canActivateChild: [AuthGuard],
    children: [ 
      {
        path: 'motor',
        component: MotorPolicyComponent,
      },
      {
        path: 'motor/motor-policy-management',
        component: MotorPolicyManagementComponent,
      }, 
      {
        path: 'motor/:id/:policyType',
        component: MotorPolicyComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotorRoutingModule { }
