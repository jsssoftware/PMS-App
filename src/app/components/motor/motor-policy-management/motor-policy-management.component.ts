import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyManagement, SearchPolicyType, Vertical } from 'src/app/shared/utilities/enums/enum';

@Component({
  selector: 'app-motor-policy-management',
  templateUrl: './motor-policy-management.component.html',
  styleUrls: ['./motor-policy-management.component.css']
})
export class MotorPolicyManagementComponent implements OnInit {
  panelOpenState = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeWithEnum(enumName: string){
    switch (enumName){
      case "New": 
      this.router.navigate(["/user/customer/"+SearchPolicyType.Motor_New+"/"+Vertical.Motor+""]);
      break;
      case "Renew": 
      this.router.navigate(["/user/search-policy/"+SearchPolicyType.Motor_Renew+"/"+Vertical.Motor+""]);
      break;
      case "Incomplete": 
      this.router.navigate(["/user/search-policy/"+SearchPolicyType.Motor_Incomplete+"/"+Vertical.Motor+""]);
      break;
      case "Correction": 
      this.router.navigate(["/user/search-policy/"+SearchPolicyType.Motor_Correction+"/"+Vertical.Motor+""]);
      break;
      case "Verify": 
      this.router.navigate(["/user/search-policy/"+SearchPolicyType.Motor_Verify+"/"+Vertical.Motor+""]);
      break;
      case "Modify": 
      this.router.navigate(["/user/search-policy/"+SearchPolicyType.Motor_Modify+"/"+Vertical.Motor+""]);
      break;
      case "View": 
      this.router.navigate(["/user/search-policy/"+SearchPolicyType.Motor_View+"/"+Vertical.Motor+""]);
      break;
      case "rollover":
      this.router.navigate(["/user/customer/"+SearchPolicyType.Motor_rollover+"/"+Vertical.Motor+""]);

  }
}
}