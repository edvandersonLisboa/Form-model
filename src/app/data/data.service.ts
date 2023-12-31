import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getSubscripitionTypes(): Observable<string[]>{
    return of(["Monthly", "Annual", "Lifetime"]);
  }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    var ret = this.http.post('https://putsreq.com/dprREyRRgiXFkVPFY2sM', JSON.stringify(userSettings));
    return ret;
  }
}


