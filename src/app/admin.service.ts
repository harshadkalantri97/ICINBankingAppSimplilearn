import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminService {



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



constructor(private http: HttpClient) { }
//admin portal services..
public getUsersList(): Observable<any> {
   return this.http.get<User>("http://localhost:8090/viewusers");  
}

public toLockUser(id:number):Observable<any>
{
  console.log(id);
   return this.http.put<User>(`http://localhost:8090/lockuser/${id}`,this.http);
}

// toLockUser(id:number): Observable<any> {
//   return this.http.put("http://localhost:8090/lockuser/${id}", id, this.httpOptions).pipe(
//     tap(_ => this.log(`updated hero id=${id}`)),
//     catchError(this.handleError<any>('updateHero'))
//   );
// }

// private handleError<T>(operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {

//     // TODO: send the error to remote logging infrastructure
//     console.error(error); // log to console instead

//     // TODO: better job of transforming error for user consumption
//     this.log(`${operation} failed: ${error.message}`);

//     // Let the app keep running by returning an empty result.
//     return of(result as T);
//   };
// }

// /** Log a HeroService message with the MessageService */
// private log(message: string) {
//   this.messageService.add(`HeroService: ${message}`);
// }

}
