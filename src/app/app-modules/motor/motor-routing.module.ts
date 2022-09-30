import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth-guard/auth.guard';
import { AddClaimsComponent } from '../claims/add-claims/add-claims.component';
import { ClaimsComponent } from '../claims/claims.component';
import { SearchClaimsComponent } from '../claims/search-claims/search-claims.component';
import { SearchPolicyClaimsComponent } from '../claims/search-policy-claims/search-policy-claims.component';
import { AddCustomerComponent } from '../customer/add-customer/add-customer.component';
import { CustomerComponent } from '../customer/customer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddInspectionComponent } from '../inspection/add-inspection/add-inspection.component';
import { InspectionComponent } from '../inspection/inspection.component';
import { SearchInspectionComponent } from '../inspection/search-inspection/search-inspection.component';
import { LayoutComponent } from '../../shared/common-component/layout/layout.component';
import { SearchPolicyComponent } from '../policy/search-policy/search-policy.component';
import { AddVoucherComponent } from '../voucher/add-voucher/add-voucher.component';
import { SearchVoucherComponent } from '../voucher/search-voucher/search-voucher.component';
import { VoucherComponent } from '../voucher/voucher.component';
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
      },
      {
        path: 'voucher',
        component: VoucherComponent,
      },
      {
        path: 'voucher-form/:form-type/:voucherId/:mode',
        component: AddVoucherComponent,
      },
      {
        path: 'search-voucher/:form-type',
        component: SearchVoucherComponent,
      },
      {
        path: 'claims',
        component: ClaimsComponent,
      },
      {
        path: 'claims-search-policy',
        component: SearchPolicyClaimsComponent,
      },
      {
        path: 'claims/:form-type/:claimsId/:policyId/:verticalId',
        component: AddClaimsComponent,
      },
      {
        path: 'search-claims/:form-type',
        component: SearchClaimsComponent,
      },
      {
        path: 'inspection',
        component: InspectionComponent,
      },
      {
        path: 'inspection/:form-type/:inspectionId',
        component: AddInspectionComponent,
      },
      {
        path: 'inspection-search/:form-type',
        component: SearchInspectionComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotorRoutingModule { }
