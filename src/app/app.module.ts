import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/common-module/material-module';
import { Services } from './app-services/register.service';
import { LoginComponent } from './shared/common-component/login/login.component';
import { MotorModule } from './app-modules/policy-management/motor/motor.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AuthGuard } from './shared/auth-guard/auth.guard';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { CommonFunction } from 'src/app/shared/utilities/helpers/common-function'; 
import { HeaderComponent } from './shared/common-component/layout/header/header.component';
import { TopMenuComponent } from './shared/common-component/layout/top-menu/top-menu.component';
import { MenuItemComponent } from './shared/common-component/layout/menu-item/menu-item.component';
import { MotorPolicyComponent } from './app-modules/policy-management/motor/motor-policy-data/motor-policy.component';
import { MotorPolicyManagementComponent } from './app-modules/policy-management/motor/motor-policy-management/motor-policy-management.component';
import { InspectionDetailComponent } from './app-modules/policy-management/motor/motor-policy-data/inspection-detail/inspection-detail.component';
import { MotorDialogBoxComponent } from './app-modules/policy-management/motor/motor-dialog-box/motor-dialog-box.component';
import { VoucherDetailComponent } from './app-modules/policy-management/motor/motor-policy-data/voucher-detail/voucher-detail.component';
import { SubSystemModule } from './app-modules/sub-system/subsystem.module';
import { MasterModule } from './app-modules/master/master.module';
import { SystemInitialModule } from './app-modules/dashboard/systeminitial.module';
import { PolicyManagementModule } from './app-modules/policy-management/policymanagement.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,  
    HeaderComponent,
    TopMenuComponent,
    MenuItemComponent,    

    MotorDialogBoxComponent,
    MotorPolicyComponent, 
    MotorPolicyManagementComponent,
    InspectionDetailComponent, // in popup used
    VoucherDetailComponent, // in popup used
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
    PolicyManagementModule,
    MotorModule,
    SubSystemModule,
    MasterModule,
    MaterialFileInputModule
  ],
  providers: [CommonFunction, Services, AuthGuard, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
