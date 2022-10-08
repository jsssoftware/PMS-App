import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth-guard/auth.guard'; 
import { SearchPolicyComponent } from '../../../shared/common-component/search-policy/search-policy.component';
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
        path: 'search-policy',
        component: SearchPolicyComponent
      },
      {
        path: 'motor/:id/:policyType',
        component: MotorPolicyComponent,
      },

      {
        path: 'search-policy/:policyType/:verticalType',
        component: SearchPolicyComponent
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotorRoutingModule { }
