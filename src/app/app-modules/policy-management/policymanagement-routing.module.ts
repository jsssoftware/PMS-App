import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth-guard/auth.guard';  
import { HealthnewPolicyManagementComponent } from './healthnew/healthnew-policy-management/healthnew-policy-management.component';
import { HealthnewPolicyComponent } from './healthnew/healthnew-policy/healthnew-policy.component';

import { MotornewPolicyManagementComponent } from './motornew/motornew-policy-management/motornew-policy-management.component';
import { MotornewPolicyComponent } from './motornew/motornew-policy/motornew-policy.component';
  
const routes: Routes = [
  {
    path: 'pms',  canActivateChild: [AuthGuard],
    children: [ 
      {
        path: 'motor',
        component: MotornewPolicyComponent,
      },
      {
        path: 'motor/:id/:policyType',
        component: MotornewPolicyComponent,
      },
      {
        path: 'motor/motor-policy-management',
        component: MotornewPolicyManagementComponent,
      }, 
    

      {
        path: 'health',
        component: HealthnewPolicyComponent,
      },
      {
        path: 'health/:id/:policyType',
        component: HealthnewPolicyComponent,
      },
      {
        path: 'health/health-policy-management',
        component: HealthnewPolicyManagementComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyManagementRoutingModule { }
