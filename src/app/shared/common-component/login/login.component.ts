import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginDto } from 'src/app/app-entites/dtos/login/login-dto';
import { ILoginModel } from 'src/app/app-entites/models/account/login-model';
import { IAccountService } from 'src/app/app-services/account-service/abstracts/account.iservice';
import Swal from 'sweetalert2';
import { IApiManagerService } from '../../../app-services/api-manager/abstracts/api-manager-iservice';
import { ICommonService } from '../../../app-services/common-service/abstracts/common.iservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public _branchs: any;
  constructor(
    private accountService: IAccountService,
    private commonService: ICommonService,
    private router: Router) {
    this.getBranchs();
  }

  ngOnInit() {
    if (sessionStorage.getItem('oauth-token') != null) {
      this.router.navigate(["/user/dashboard"]);
    }
  }

  //#region 
  loginForm = new FormGroup({
    branch: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  //#endregion

  getBranchs(): void {
    this.commonService.getBranchs().subscribe((response: any) => {
      this._branchs = response;
    });
  }

  onSubmit() {
    let model: ILoginModel = {
      Username: this.loginForm.value.username,
      Password: this.loginForm.value.password,
      BranchId: parseInt(this.loginForm.value.branch)
    };

    this.accountService.login(model).subscribe((response: ILoginDto) => {
      if (response.error == null || response.error == "" || response.error == null || response.error == undefined) {
        sessionStorage.setItem('branchId', this.loginForm.value.branch);
        sessionStorage.setItem('branchName', this._branchs.filter((f: any) => f.Value === this.loginForm.value.branch)[0].Name)
        sessionStorage.setItem('oauth-token', response.access_token);
        this.router.navigate(["/user/dashboard"]);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You have successfully logged in',
          showConfirmButton: false,
          timer: 2000,
          showClass: {
            popup: 'animate__animated animate__fadeInRightBig'
          }
        });
        
      }
      else {
        Swal.fire({
          icon: 'error',
          text: response.error
        });
      }
    });
  }
}