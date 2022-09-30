import { IDateDto } from "src/app/Entites/dtos/common/date-dto";

export interface IPreviousPolicyFormDataModel {
    LastYearInsuranceCompany: number;
    PreviousPolicyNumber: string;
    LastPolicyExpiryDateString: string;
    LastPolicyExpiryDateDto: IDateDto|null;
}