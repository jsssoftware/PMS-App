import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotorPolicyComponent } from './motor-policy-data/motor-policy.component';
import { MotorRoutingModule } from './motor-routing.module';
import { LayoutComponent } from '../layout/layout.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { CustomerComponent } from '../customer/customer.component';
import { AddCustomerComponent } from '../customer/add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/common-module/material-module';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MotorPolicyManagementComponent } from './motor-policy-management/motor-policy-management.component';
import { SearchPolicyComponent } from '../policy/search-policy/search-policy.component';
import { InspectionDetailComponent } from './motor-policy-data/inspection-detail/inspection-detail.component';
import { MotorDialogBoxComponent } from './motor-dialog-box/motor-dialog-box.component';
import { VoucherDetailComponent } from './motor-policy-data/voucher-detail/voucher-detail.component';
import { EndorsementInformationComponent } from './motor-policy-data/endorsement-information/endorsement-information.component';
import { ClaimInformationComponent } from './motor-policy-data/claim-information/claim-information.component';
import { TopMenuComponent } from '../layout/top-menu/top-menu.component'; 
import { MenuItemComponent } from '../layout/menu-item/menu-item.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    TopMenuComponent,
    SidebarComponent,
    MotorPolicyComponent,
    CustomerComponent,
    AddCustomerComponent,
    MotorPolicyManagementComponent,
    SearchPolicyComponent,
    InspectionDetailComponent,
    MotorDialogBoxComponent,
    VoucherDetailComponent,
    EndorsementInformationComponent,
    ClaimInformationComponent, 
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    MotorRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule
  ]
})
export class MotorModule { }
