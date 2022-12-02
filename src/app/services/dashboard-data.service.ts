import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  constructor(private http: HttpClient) { }

  public getNewTeamMembersList(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/6371c465-f63a-4dd9-436e-08da496bf5f2`);
  }
  public getTeamMembersGrid(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/d2d94130-e6aa-4387-437e-08da496bf5f2`);
  }
  public getTeamGrowth(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/9d362c81-e18a-4fff-4355-08da496bf5f2`);
  }
  public getAllTeamMembers(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/d2d94130-e6aa-4387-437e-08da496bf5f2`);
  }
}
