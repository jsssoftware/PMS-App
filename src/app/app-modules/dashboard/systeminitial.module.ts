import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/common-module/material-module';
import { MaterialFileInputModule } from 'ngx-material-file-input';  
import { DashboardComponent } from './dashboard.component';
import { SystemInitialRoutingModule } from './systeminitial-routing.module';



@NgModule({
  declarations: [  
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SystemInitialRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule
  ]
})
export class SystemInitialModule { }
