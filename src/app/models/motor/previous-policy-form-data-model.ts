import { IDateDto } from "src/app/dtos/common/date-dto";

export interface IPreviousPolicyFormDataModel {
    LastYearInsuranceCompany: number;
    PreviousPolicyNumber: string;
    LastPolicyExpiryDateString: string;
    LastPolicyExpiryDateDto: IDateDto|null;
}