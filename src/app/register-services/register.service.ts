import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MAT_DATE_FORMATS } from "@angular/material/core";
import { IAccountService } from "../services/account-service/abstracts/account.iservice";
import { AccountService } from "../services/account-service/account.service";
import { IApiManagerService } from "../services/api-manager/abstracts/api-manager-iservice";
import { ApiManagerService } from "../services/api-manager/api-manager.service";
import { IClaimsService } from "../services/claims/abstracts/claims.iservice";
import { ClaimsService } from "../services/claims/claims.service";
import { ICommonService } from "../services/common-service/abstracts/common.iservice";
import { CommonService } from "../services/common-service/common.service";
import { ICustomerService } from "../services/customer-service/abstracts/customer.iservice";
import { CustomerService } from "../services/customer-service/customer.service";
import { IInspectionService } from "../services/inspection/abstracts/inspection.iservice";
import { InspectionService } from "../services/inspection/inspection.service";
import { IMotorService } from "../services/motor-service/abstracts/motor.iservice";
import { MotorService } from "../services/motor-service/motor.service";
import { OAuthTokenInterceptor } from "../services/token-interceptor/oauth-token-interceptor";
import { IVoucherService } from "../services/voucher/abstracts/voucher.iservice";
import { VoucherService } from "../services/voucher/voucher.service";
import { CUSTOM_DATE_FORMAT } from "../utilities/helpers/helper";

export const Services = [
  { provide: IApiManagerService, useClass: ApiManagerService },
  { provide: IAccountService, useClass: AccountService },
  { provide: ICommonService, useClass: CommonService },
  { provide: ICustomerService, useClass: CustomerService },
  { provide: IMotorService, useClass: MotorService },
  { provide: IVoucherService, useClass: VoucherService },
  { provide: IClaimsService, useClass: ClaimsService },
  { provide: IInspectionService, useClass: InspectionService },
  { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMAT },
  { provide: HTTP_INTERCEPTORS, useClass: OAuthTokenInterceptor, multi: true }
];