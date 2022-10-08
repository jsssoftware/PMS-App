import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth-guard/auth.guard';  
import { LayoutComponent } from 'src/app/shared/common-component/layout/layout.component';
import { DashboardComponent } from './dashboard.component';
  
const routes: Routes = [
  {
    path: 'user', component: LayoutComponent, canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      }   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemInitialRoutingModule { }