import { Observable } from "rxjs";
import { ICommonDto } from "src/app/dtos/common/common-dto";
import { IDropDownDto } from "src/app/dtos/common/drop-down-dto";
import { ISearchVoucherDto } from "src/app/dtos/voucher/search-voucher-dto";
import { IVoucherSearchPolicyDto } from "src/app/dtos/voucher/voucher-search-policy-dto";
import { IAddUpdateVoucherModel } from "src/app/models/voucher/add-update-voucher-model";
import { ISearchVoucherModel } from "src/app/models/voucher/search-voucher-model";
import { IVoucherDto } from "src/app/dtos/voucher/voucher-dto";
import { IVoucherSearchPolicyModel } from "src/app/models/voucher/voucher-search-policy-model";

export abstract class IVoucherService {
    abstract getVoucherTypes(): Observable<IDropDownDto<number>[]>;
    abstract searchPolicies(model: IVoucherSearchPolicyModel): Observable<IVoucherSearchPolicyDto[]>;
    abstract searchVouchers(model: ISearchVoucherModel): Observable<ISearchVoucherDto[]>;
    abstract addVoucher(model: IAddUpdateVoucherModel): Observable<ICommonDto<string>>;
    abstract updateVoucher(voucherId: number, model: IAddUpdateVoucherModel): Observable<ICommonDto<string>>;
    abstract updateVoucherControlNumber(voucherId: number, model: any): Observable<ICommonDto<string>>;
    abstract verifyVoucher(voucherId: number, model: any): Observable<ICommonDto<string>>;
    abstract getVoucherById(voucherId: number): Observable<IVoucherDto>;
}
