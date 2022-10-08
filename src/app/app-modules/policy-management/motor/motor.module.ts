import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MotorRoutingModule } from './motor-routing.module'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/common-module/material-module';
import { MaterialFileInputModule } from 'ngx-material-file-input'; 



@NgModule({
  declarations: [  
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
