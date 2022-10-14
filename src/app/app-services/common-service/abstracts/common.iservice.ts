import { ISearchPolicyDto } from '../../../app-entites/dtos/common/search-policy-dto';
import { Observable } from "rxjs";
import { IDateDto } from "src/app/app-entites/dtos/common/date-dto";
import { IDropDownDto } from "src/app/app-entites/dtos/common/drop-down-dto";
import { IAddOnPlanOptionDto } from "src/app/app-entites/dtos/motor/add-on-plan-option-dto";
import { IPolicyTermDto } from "src/app/app-entites/dtos/motor/policy-term-dto";
import { IRtoZoneDto } from "src/app/app-entites/dtos/motor/rto-zone-dto";
import { IVarientDto } from "src/app/app-entites/dtos/motor/varient-dto";
import { IVehicleDto } from "src/app/app-entites/dtos/motor/vehicle-dto";
import { IYearDto } from "src/app/app-entites/dtos/motor/year-dto";
import { Vertical } from "src/app/shared/utilities/enums/enum";
import { ISearchPolicyModel } from 'src/app/app-entites/models/common/search-policy-model';
import { IDataTableDto } from 'src/app/app-entites/dtos/common/data-table-dto';
import { IPreviousClaimDto } from 'src/app/app-entites/dtos/common/previous-claims-dto';
import { IPolicyVoucherDto } from 'src/app/app-entites/dtos/common/policy-voucher-dto';
import { IPolicyInspectionDto } from 'src/app/app-entites/dtos/common/policy-inspection-dto';
import { IPolicyDocumentDto } from 'src/app/app-entites/dtos/common/policy-document-dto';
import { IMenuItemDto } from 'src/app/app-entites/dtos/common/menuitem-dto';

export abstract class ICommonService {
    abstract getBanks(): Observable<any>;
    abstract getVerticalById(verticalId: number): Observable<any>;
    abstract getVerticals(): Observable<any>;
    abstract getPolicyTypes(type: number): Observable<any>;
    abstract getVehicleClasses(): Observable<any>;
    abstract getPackageTypes(): Observable<IDropDownDto<number>[]>;
    abstract getPolicyTerms(policyTypeId: number, vehicleClassId: number, policyPackageTypeId: number): Observable<IPolicyTermDto[]>;
    abstract getInsuranceCompanies(vertical: Vertical): Observable<IDropDownDto<number>[]>;
    abstract getInsuranceCompanyBranches(vertical: Vertical, insuranceCompanyId: number, branchId: number): Observable<IDropDownDto<number>[]>;
    abstract getNumberOfYears(): Observable<IYearDto[]>;
    abstract getFinancers(): Observable<any>;
    abstract getInspectionCompanies(): Observable<any>;
    abstract getVehicles(vehicleClassId: number): Observable<IDropDownDto<number>[]>;
    abstract getVehicleDetails(varientId: number): Observable<IVehicleDto>;
    abstract getManufacturers(): Observable<any>;
    abstract getModels(manufacturerId: number): Observable<IDropDownDto<number>[]>;
    abstract getVarients(manufacturerId: number, modelId: number, vehicleClassId: number): Observable<IVarientDto[]>;
    abstract getRtoZones(): Observable<IRtoZoneDto[]>;
    abstract getMakeYears(vehicleClassId: number): Observable<IDropDownDto<number>[]>;
    abstract getUsages(): Observable<any>;
    abstract getNcbs(): Observable<any>;
    abstract getCommissionPaidOn(): Observable<any>;
    abstract getAddOnRiders(insuranceCompanyId: number, verticalId: number): Observable<IDropDownDto<number>[]>;
    abstract getAddOnPlanOptions(addOnRiderId: number, verticalId: number): Observable<IAddOnPlanOptionDto[]>;
    abstract getRelations(): Observable<any>;
    abstract getTeleCallers(vertical: Vertical, branchId: number): Observable<any>;
    abstract getReferences(branchId: number): Observable<any>;
    abstract getFosNames(vertical: Vertical, branchId: number): Observable<any>;
    abstract getDsaNames(): Observable<any>;
    abstract getBranchs(): Observable<any>;
    abstract getCities(): Observable<IDropDownDto<number>[]>;
    abstract getDate(date: string, year: number): Observable<IDateDto>;
    abstract getDocumentTypes(code: string): Observable<IDropDownDto<number>[]>;
    abstract getPaymentModes(): Observable<IDropDownDto<number>[]>;
    abstract getPos(vertical: Vertical, branchId: number): Observable<IDropDownDto<number>[]>;
    abstract getPosManagedByPosId(posId: number): Observable<IDropDownDto<number>>;
    abstract getDateInString(date: Date): string;
    abstract getAllPolicies(model: ISearchPolicyModel, pageNumber: number, pageSize: number): Observable<IDataTableDto<ISearchPolicyDto[]>>;
    abstract getDateFromIDateDto(date: IDateDto): Date | null;
    abstract getAllTeamMembers(vertical: Vertical, branchId: number): Observable<IDropDownDto<number>[]>;
    abstract getAllGenders(): Observable<IDropDownDto<number>[]>;
    abstract getLoggedInUserDetail(): Observable<any>;
    abstract getProducts(verticalId: number): Observable<IDropDownDto<number>[]>;
    abstract getPreviousClaims(policyId: number): Observable<IPreviousClaimDto[]>;
    abstract getClaimStatus(): Observable<IDropDownDto<number>[]>;
    abstract getSubClaimStatus(claimsStatusId: number): Observable<IDropDownDto<number>[]>;
    abstract getClaimTypes(verticalId: number): Observable<IDropDownDto<number>[]>;
    abstract getInspectionStatus(): Observable<IDropDownDto<number>[]>;
    abstract getInspectionSubStatus(inspectionStatusId: number): Observable<IDropDownDto<number>[]>;
    abstract getInspectionReasons(): Observable<IDropDownDto<number>[]>;
    abstract getPolicyClaimsByPolicyId(policyId: number): Observable<IPreviousClaimDto[]>;
    abstract getPolicyVoucherByPolicyId(policyId: number): Observable<IPolicyVoucherDto[]>;
    abstract getPolicyInspectionByPolicyId(policyId: number): Observable<IPolicyInspectionDto[]>;
    abstract getClaimsById(claimsId: number): Observable<IPreviousClaimDto>;
    abstract getVoucherById(voucherId: number): Observable<IPolicyVoucherDto>;
    abstract getInspectionById(inspectionId: number): Observable<IPolicyInspectionDto>;
    abstract getPolicyDocumentsByPolicyId(policyId:number):Observable<IPolicyDocumentDto[]>;
    abstract getMenus():Observable<IMenuItemDto[]>;
    abstract getProduct(): Observable<any>;
    abstract getPlan(productId: number): Observable<any>;
    abstract getPlanType(): Observable<any>;
    abstract getPortability(): Observable<any>; 
}