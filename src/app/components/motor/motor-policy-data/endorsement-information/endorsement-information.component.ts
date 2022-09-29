import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-endorsement-information',
  templateUrl: './endorsement-information.component.html',
  styleUrls: ['./endorsement-information.component.css']
})
export class EndorsementInformationComponent implements OnInit {

  constructor() { }
  @Input() jsonValueData: any;

  ngOnInit(): void {
  }

}
