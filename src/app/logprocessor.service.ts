import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})


export class LogprocessorService {



  constructor(private http: HttpClient) {
  }

  getStatus(type: string,id : string,ts : number): Observable<any> {
    return this.http.get('//localhost:8090/status/'+type+'/'+id+'/'+ts);
  }

  uploadLogFile(formData: FormData): Observable<any> {
    console.log('entered service');
    return  this.http.post('//localhost:8090/uploadFile', formData);
}

}

