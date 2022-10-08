import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth-guard/auth.guard';
import { AddCustomerComponent } from '../../master/customer/add-customer/add-customer.component';
import { CustomerComponent } from '../../master/customer/customer.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { LayoutComponent } from '../../../shared/common-component/layout/layout.component';
import { SearchPolicyComponent } from '../../../shared/common-component/search-policy/search-policy.component';
import { MotorPolicyComponent } from './motor-policy-data/motor-policy.component';
import { MotorPolicyManagementComponent } from './motor-policy-management/motor-policy-management.component';

// to do diff module


const routes: Routes = [
  {
    path: 'user', component: LayoutComponent, canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'motor',
        component: MotorPolicyComponent,
      },
      {
        path: 'customer',
        component: CustomerComponent,
      },
      {
        path: 'add-customer/:name',
        component: AddCustomerComponent,
      },
      {
        path: 'edit-customer/:customerId',
        component: AddCustomerComponent,
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
        path: 'customer/:policyType/:verticalType',
        component: CustomerComponent,
      },
      {
        path: 'search-policy/:policyType/:verticalType',
        component: SearchPolicyComponent
      },
      {
        path: 'add-customer',
        component: AddCustomerComponent,
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotorRoutingModule { }
