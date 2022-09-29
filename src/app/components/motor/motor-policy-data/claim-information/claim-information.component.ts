import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim-information',
  templateUrl: './claim-information.component.html',
  styleUrls: ['./claim-information.component.css']
})
export class ClaimInformationComponent implements OnInit {

  constructor() { }
  @Input() jsonValueData: any;

  ngOnInit(): void {
  }

}
