import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(route: string) {
    switch (route) {
      case "New":
        this.router.navigate(["/user/voucher-form", "add", -1, 0]);
        break;
      case "View":
        this.router.navigate(["/user/search-voucher", 1]);
        break;
      case "Verify":
        this.router.navigate(["/user/search-voucher", 2]);
        break;
      case "Update":
        this.router.navigate(["/user/search-voucher", 3]);
        break;
      case "UpdateControlNumber":
        this.router.navigate(["/user/search-voucher", 4]);
        break;
    }
  }
}
