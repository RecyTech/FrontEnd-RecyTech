import { Injectable } from '@angular/core';

import {apiServer} from "../../apiServer";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductoService<T> {
  basePath: string = `http://localhost:3000`;
  resourceEndpoint: string = '/resources';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
    //Default error handling
    if (error.error instanceof  ErrorEvent) {
      console.error(`An error occurred: ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(`Backend returned core ${error.status}, body was ${error.error}`);
    }
    //Return an observable with a user-facing error message

    return throwError(
      ()=> new Error('Something happened with request, ' +
        'please try again later.'));

  }

  private resourcePath(): string {
    return `${this.basePath}${this.resourceEndpoint}`;
  }

  getAll(): Observable<T> {
    console.log('Get All Resources:' + this.resourcePath());
    return this.http.get<T>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  delete(id: any) {
    return this.http.delete(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  update(id: any, item: any) {
    return this.http.put<T>(`${this.resourcePath()}/${id}`, JSON.stringify(item),
      this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }
  create(item: any) {
    return this.http.post<T>(this.resourcePath(),JSON.stringify(item),
      this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }
}

