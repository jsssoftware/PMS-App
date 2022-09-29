import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-motor-dialog-box',
  templateUrl: './motor-dialog-box.component.html',
  styleUrls: ['./motor-dialog-box.component.css']
})
export class MotorDialogBoxComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  public _jsonValueData: any;

  ngOnInit(): void {
    this._jsonValueData = this.data.jsonValue;
  }

}
