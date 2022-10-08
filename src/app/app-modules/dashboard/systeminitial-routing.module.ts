import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth-guard/auth.guard';  
import { DashboardComponent } from './dashboard.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
  
const routes: Routes = [
  {
    path: 'user', canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'wip',
        component: WorkInProgressComponent,
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemInitialRoutingModule { }
