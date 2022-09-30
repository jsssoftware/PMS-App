import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-modules/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/common-module/material-module';
import { MenuItems } from './shared/utilities/helpers/sidebar-menu';
import { Services } from './app-services/register.service';
import { LoginComponent } from './app-modules/login/login.component';
import { MotorModule } from './app-modules/motor/motor.module';
import { DashboardComponent } from './app-modules/dashboard/dashboard.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AuthGuard } from './shared/auth-guard/auth.guard';
import { VoucherComponent } from './app-modules/voucher/voucher.component';
import { SearchVoucherComponent } from './app-modules/voucher/search-voucher/search-voucher.component';
import { AddVoucherComponent } from './app-modules/voucher/add-voucher/add-voucher.component';
import { SearchPolicyVoucherComponent } from './app-modules/voucher/search-policy-voucher/search-policy-voucher.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ClaimsComponent } from './app-modules/claims/claims.component';
import { SearchPolicyClaimsComponent } from './app-modules/claims/search-policy-claims/search-policy-claims.component';
import { AddClaimsComponent } from './app-modules/claims/add-claims/add-claims.component';
import { SearchClaimsComponent } from './app-modules/claims/search-claims/search-claims.component';
import { ClaimsFollowUpDataComponent } from './app-modules/claims/claims-follow-up-data/claims-follow-up-data.component';
import { ViewClaimsComponent } from './app-modules/claims/view-claims/view-claims.component';
import { InspectionComponent } from './app-modules/inspection/inspection.component';
import { SearchInspectionComponent } from './app-modules/inspection/search-inspection/search-inspection.component';
import { SearchPolicyInspectionComponent } from './app-modules/inspection/search-policy-inspection/search-policy-inspection.component';
import { AddInspectionComponent } from './app-modules/inspection/add-inspection/add-inspection.component';
import { CommonFunction } from 'src/app/shared/utilities/helpers/common-function'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    VoucherComponent,
    SearchVoucherComponent,
    AddVoucherComponent,
    SearchPolicyVoucherComponent,
    ClaimsComponent,
    SearchPolicyClaimsComponent,
    AddClaimsComponent,
    SearchClaimsComponent,
    ClaimsFollowUpDataComponent,
    ViewClaimsComponent,
    InspectionComponent,
    AddInspectionComponent,
    SearchInspectionComponent,
    SearchPolicyInspectionComponent 
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
    MotorModule,
    MaterialFileInputModule
  ],
  providers: [MenuItems,CommonFunction, Services, AuthGuard, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
