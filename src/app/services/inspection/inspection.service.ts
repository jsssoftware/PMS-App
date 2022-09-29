import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICommonDto } from "src/app/dtos/common/common-dto";
import { IInspectionDocumentDto } from "src/app/dtos/inspection/inspection-document-dto";
import { IInspectionDto } from "src/app/dtos/inspection/inspection-dto";
import { IInspectionSearchPolicyDto } from "src/app/dtos/inspection/inspection-search-policy-dto";
import { ISearchInspectionDto } from "src/app/dtos/inspection/search-inspection-dto";
import { IAddUpdateInspectionModel } from "src/app/models/inspection/add-update-inspection-model";
import { IInspectionSearchPolicyModel } from "src/app/models/inspection/inspection-search-policy-model";
import { ISearchInspectionModel } from "src/app/models/inspection/search-inspection-model";
import { Inspection } from "src/app/utilities/api-urls/inspection";
import { IApiManagerService } from "../api-manager/abstracts/api-manager-iservice";
import { IInspectionService } from "./abstracts/inspection.iservice";

@Injectable()
export class InspectionService extends IInspectionService {

    constructor(private apiManagerService: IApiManagerService) { super(); }

    addInspection = (model: IAddUpdateInspectionModel): Observable<ICommonDto<string>> => this.apiManagerService.postRequest(Inspection.AddInspection, model);

    updateInspection = (inspectionId: number, model: IAddUpdateInspectionModel): Observable<ICommonDto<string>> => this.apiManagerService.putRequest(`${Inspection.UpdateInspection}/${inspectionId}`, model);

    searchPolicies = (model: IInspectionSearchPolicyModel): Observable<IInspectionSearchPolicyDto[]> => this.apiManagerService.postRequest<IInspectionSearchPolicyDto[]>(Inspection.SearchPolicies, model);

    searchInspections = (model: ISearchInspectionModel): Observable<ISearchInspectionDto[]> => this.apiManagerService.postRequest<ISearchInspectionDto[]>(Inspection.SearchInspection, model);

    getInspectionById = (inspectionId: number): Observable<IInspectionDto> => this.apiManagerService.getRequest<IInspectionDto>(`${Inspection.InspectionById}/${inspectionId}`);

    getInspectionDocumentsByInspectionId = (inspectionId: number): Observable<IInspectionDocumentDto[]> => this.apiManagerService.getRequest<IInspectionDocumentDto[]>(`${Inspection.InspectionDocumentByInspectionId}/${inspectionId}`);

    deleteInspectionDocument = (documentId: number): Observable<ICommonDto<string>> => this.apiManagerService.deleteRequest<ICommonDto<string>>(`${Inspection.DeleteInspectionDocumentByDocumentId}/${documentId}`);
}