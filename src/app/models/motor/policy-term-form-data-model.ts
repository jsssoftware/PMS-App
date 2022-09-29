import { IDateDto } from "src/app/dtos/common/date-dto";

export interface IPolicyTermFormDataModel {
    PolicyType: number;
    VehicleClass: number;
    PackageType: string;
    PackageTypeId: number;
    PolicyTerm: number;
    AcknowledgementSlipNumber: number;
    AcknowledgementSlipIssueDateString: string;
    AcknowledgementSlipIssueDateDto: IDateDto | null;
}