import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiCallService {
  constructor(private _httpClient: HttpClient) {}

  save(value: any): Observable<any> {
    return this._httpClient.post(
      'https://apicall-d956f-default-rtdb.firebaseio.com/data.json',
      value
    );
  }

}
