export interface ISearchPolicyDto {
    PolicyId: number;
    ControlNo: string;
    CustomerId: number;
    PolicyPackageTypeId: number;
    VerticalId: number;
    ProductId: number;
    ManufacturerId: number;
    ModelId: number;
    POSId: number;
    NameInPolicy: string;
    RegistrationNo: string;
    GrossPremium: number;
    IsActive: boolean;
    Flag1: boolean;
    Flag2: boolean;
    IsVerified: boolean;
    BranchId: number;
    PolicyType: string;
    VerticalName: string;
    ProductName: string;
    ManufacturerName: string;
    ModelName: string;
    POSName: string;
    PolicyStatus: string;
    PolicyStatusId: number;
    ExpiryDate: Date;
    StartDate: Date;
    PolicyNumber: string;
    InsuranceCompanyIdNumber: number;
    InsuranceCompany: string;
    PolicyRemarks: string;
    CreatedBy: number;
    RenewalDone: boolean;
    VerticalSegmentId: number;
    StartDateInString: string;
    ExpiryDateInString: string;
}