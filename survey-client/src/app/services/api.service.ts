import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  createForm(formData) {
    return this.http.post(`http://localhost:3030/api/create-form/${formData.user}`, formData);
  }

  getFormById(formId) {
    let paramObj = {};
    if (formId) {
      let params = new HttpParams();
      paramObj = params = params.append('id', formId);
    }
    return this.http.get(`http://localhost:3030/api/get-form`, { params: paramObj });
  }

  getAllRegistrations(userId) {
    return this.http.get(`http://localhost:3030/api/form/register/${userId}/all`);
  }

  registerEvent(formData) {
    return this.http.post(`http://localhost:3030/api/form/register`, formData);
  }
}
