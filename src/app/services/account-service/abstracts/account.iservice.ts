import { Observable } from "rxjs";
import { ILoginModel } from "src/app/Entites/models/account/login-model";

export abstract class IAccountService {
    abstract login(model: ILoginModel): Observable<any>;
    abstract getBranchId(): number;
    //abstract logout();
    // abstract getLoginUserAgentId(): string;
    // abstract getLoginUserName(): string;
}
