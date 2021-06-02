import { Injectable } from '@angular/core';
import { User } from './user';
import { Admin } from './admin';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Chequebook } from './chequebook';
import { Transfer } from './transfer';

@Injectable({
  providedIn: 'root'
})
export class RegisrationService {

  constructor( private http: HttpClient) { }

  public loginUserRemote(user: User):Observable<any>
  {
    return this.http.post<any>("http://localhost:8090/login", user);
  }

  public UserRegister(user: User):Observable<any>
  {
    return this.http.post<any>("http://localhost:8090/register", user);
  }

  public adminPage(admin: Admin):Observable<any>
  {
    return this.http.post<any>("http://localhost:8090/admin",admin);
  }

  public Request(chequebook: any):Observable<any>
  {
    return this.http.post<any>(`http://localhost:8090/chequebook`,chequebook);
  }


  public viewpage(): Observable<any> {
    return this.http.get<User>("http://localhost:8090/viewpage");  
 }


public geUserByemail(email)
{
  return this.http.get("http://localhost:8090/getuser")
}

public doTransfer(transfer: Transfer): Observable<any>
{
  return this.http.post<any>("http://localhost:8090/transfer", transfer);
}

public doDeposit(deposit: any)
{
  return this.http.post<any>("http://localhost:8090/deposit", deposit);
}

public doWithdrawl(withdrawl: any): Observable<any>
{
  return this.http.post<any>("http://localhost:8090/withdraw", withdrawl);
}


public getHistory(accountId): Observable<any>
{
    return this.http.get<HttpResponse<any>>("http://localhost:8090/accounts/"+accountId+"/transactions");
}

isUserLoggedIn()
  {
    let user = sessionStorage.getItem('email');
    console.log(!(user === null));
    return !(user === null);
  }

}
