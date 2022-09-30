import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material-module';
import { MenuItems } from './shared/sidebar-menu';
import { Services } from './register-services/register.service';
import { LoginComponent } from './components/login/login.component';
import { MotorModule } from './components/motor/motor.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AuthGuard } from './shared/auth-guard/auth.guard';
import { VoucherComponent } from './components/voucher/voucher.component';
import { SearchVoucherComponent } from './components/voucher/search-voucher/search-voucher.component';
import { AddVoucherComponent } from './components/voucher/add-voucher/add-voucher.component';
import { SearchPolicyVoucherComponent } from './components/voucher/search-policy-voucher/search-policy-voucher.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ClaimsComponent } from './components/claims/claims.component';
import { SearchPolicyClaimsComponent } from './components/claims/search-policy-claims/search-policy-claims.component';
import { AddClaimsComponent } from './components/claims/add-claims/add-claims.component';
import { SearchClaimsComponent } from './components/claims/search-claims/search-claims.component';
import { ClaimsFollowUpDataComponent } from './components/claims/claims-follow-up-data/claims-follow-up-data.component';
import { ViewClaimsComponent } from './components/claims/view-claims/view-claims.component';
import { InspectionComponent } from './components/inspection/inspection.component';
import { SearchInspectionComponent } from './components/inspection/search-inspection/search-inspection.component';
import { SearchPolicyInspectionComponent } from './components/inspection/search-policy-inspection/search-policy-inspection.component';
import { AddInspectionComponent } from './components/inspection/add-inspection/add-inspection.component';
import { CommonFunction } from 'src/app/shared/common-function'; 

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
