import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  show: boolean = false;
  public deploymentName: any;

  constructor(private http: HttpClient) {
  }

  fetchAllForms(userId) {
    return this.http.get(`http://localhost:3030/api/form/${userId}/all`);
  }

  getUserInfo(userId) {
    return this.http.get(`http://localhost:3030/api/user/${userId}`);
  }

}
