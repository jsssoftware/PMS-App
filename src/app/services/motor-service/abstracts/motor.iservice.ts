import { Observable } from "rxjs";
import { ICommonDto } from "src/app/dtos/common/common-dto";
import { IMotorPolicyFormDataModel } from "src/app/models/motor/motor-policy-form-data-model";

export abstract class IMotorService {
     abstract createPolicy(model: any): Observable<ICommonDto<string>>;
     abstract getMotorPolicyById(policyId: number): Observable<IMotorPolicyFormDataModel>;
}