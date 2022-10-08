import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/common-module/material-module';
import { MenuItems } from './shared/utilities/helpers/sidebar-menu';
import { Services } from './app-services/register.service';
import { LoginComponent } from './shared/common-component/login/login.component';
import { MotorModule } from './app-modules/policy-management/motor/motor.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AuthGuard } from './shared/auth-guard/auth.guard';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { CommonFunction } from 'src/app/shared/utilities/helpers/common-function'; 
import { LayoutComponent } from './shared/common-component/layout/layout.component';
import { HeaderComponent } from './shared/common-component/layout/header/header.component';
import { TopMenuComponent } from './shared/common-component/layout/top-menu/top-menu.component';
import { SidebarComponent } from './shared/common-component/layout/sidebar/sidebar.component';
import { MenuItemComponent } from './shared/common-component/layout/menu-item/menu-item.component';
import { MotorPolicyComponent } from './app-modules/policy-management/motor/motor-policy-data/motor-policy.component';
import { MotorPolicyManagementComponent } from './app-modules/policy-management/motor/motor-policy-management/motor-policy-management.component';
import { SearchPolicyComponent } from './shared/common-component/search-policy/search-policy.component';
import { InspectionDetailComponent } from './app-modules/policy-management/motor/motor-policy-data/inspection-detail/inspection-detail.component';
import { MotorDialogBoxComponent } from './app-modules/policy-management/motor/motor-dialog-box/motor-dialog-box.component';
import { VoucherDetailComponent } from './app-modules/policy-management/motor/motor-policy-data/voucher-detail/voucher-detail.component';
import { EndorsementInformationComponent } from './app-modules/policy-management/motor/motor-policy-data/endorsement-information/endorsement-information.component';
import { ClaimInformationComponent } from './app-modules/policy-management/motor/motor-policy-data/claim-information/claim-information.component';
import { SubSystemModule } from './app-modules/sub-system/subsystem.module';
import { MasterModule } from './app-modules/master/master.module';
import { SystemInitialModule } from './app-modules/dashboard/systeminitial.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    
    LayoutComponent,
    HeaderComponent,
    TopMenuComponent,
    SidebarComponent,
    MenuItemComponent,  


    MotorPolicyComponent, 
    MotorPolicyManagementComponent,
    SearchPolicyComponent,
    InspectionDetailComponent,
    MotorDialogBoxComponent,
    VoucherDetailComponent,
    EndorsementInformationComponent,
    ClaimInformationComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SystemInitialModule,
    MotorModule,
    SubSystemModule,
    MasterModule,
    MaterialFileInputModule
  ],
  providers: [MenuItems,CommonFunction, Services, AuthGuard, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
