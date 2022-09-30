import { IDateDto } from "src/app/Entites/dtos/common/date-dto";

export interface IPaymentFormDataModel {
    Mode: number;
    Amount: number;
    InstrumentNumber: string;
    DatedString: string;
    DatedDto: IDateDto|null;
    Bank: number;
}