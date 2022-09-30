import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICommonDto } from "src/app/Entites/dtos/common/common-dto";
import { IMotorPolicyFormDataModel } from "src/app/Entites/models/motor/motor-policy-form-data-model";
import { Motor } from "../../shared/utilities/api-urls/motor";
import { IApiManagerService } from "../api-manager/abstracts/api-manager-iservice";
import { IMotorService } from "./abstracts/motor.iservice";

@Injectable()
export class MotorService extends IMotorService {
    constructor(private apiManagerService: IApiManagerService) { super(); }

    createPolicy = (model: any): Observable<ICommonDto<string>> => this.apiManagerService.postRequest<ICommonDto<string>>(Motor.CreateMotorPolicy, model);
    getMotorPolicyById = (policyId: number): Observable<IMotorPolicyFormDataModel> => this.apiManagerService.getRequest<IMotorPolicyFormDataModel>(`${Motor.MotorPolicyById}/${policyId}`);

}
