import { Observable } from "rxjs";
import { ICommonDto } from "src/app/Entites/dtos/common/common-dto";
import { IInspectionDocumentDto } from "src/app/Entites/dtos/inspection/inspection-document-dto";
import { IInspectionDto } from "src/app/Entites/dtos/inspection/inspection-dto";
import { IInspectionSearchPolicyDto } from "src/app/Entites/dtos/inspection/inspection-search-policy-dto";
import { ISearchInspectionDto } from "src/app/Entites/dtos/inspection/search-inspection-dto";
import { IAddUpdateInspectionModel } from "src/app/Entites/models/inspection/add-update-inspection-model";
import { IInspectionSearchPolicyModel } from "src/app/Entites/models/inspection/inspection-search-policy-model";
import { ISearchInspectionModel } from "src/app/Entites/models/inspection/search-inspection-model";

export abstract class IInspectionService {
    abstract getInspectionById(inspectionId: number): Observable<IInspectionDto>;
    abstract addInspection(model: IAddUpdateInspectionModel): Observable<ICommonDto<string>>;
    abstract updateInspection(inspectionId: number, model: IAddUpdateInspectionModel): Observable<ICommonDto<string>>;
    abstract getInspectionDocumentsByInspectionId(inspectionId: number): Observable<IInspectionDocumentDto[]>;
    abstract deleteInspectionDocument(documentId: number): Observable<ICommonDto<string>>;
    abstract searchInspections(model: ISearchInspectionModel): Observable<ISearchInspectionDto[]>;
    abstract searchPolicies(model: IInspectionSearchPolicyModel): Observable<IInspectionSearchPolicyDto[]>;
}