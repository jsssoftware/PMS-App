import { IDateDto } from "src/app/dtos/common/date-dto";

export interface ITpOdPolicyFormDataModel {
    InsuranceCompany: number;
    PolicyNumber: string;
    StartDateString: string;
    StartDateDto: IDateDto | null;
    NumberOfYear: number;
    ExpiryDateString: string;
    ExpiryDateDto: IDateDto | null;
}