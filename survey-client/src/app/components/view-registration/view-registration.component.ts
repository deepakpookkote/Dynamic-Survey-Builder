import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.scss']
})
export class ViewRegistrationComponent implements OnInit {
  registerData: any = [];

  constructor(private storageService: StorageService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.getRegistrations();
  }

  getRegistrations() {
    this.apiService.getAllRegistrations(this.storageService.get().currentUser.id).pipe().subscribe(registerData => {
      this.registerData = registerData['registrations'].map((item => {
        const data = {};
        data['id'] = item._id;
        data['formId'] = item.formId._id;
        data['formName'] = item.formId.formName;
        data['formData'] = JSON.parse(item.formData);
        return data;
      }));
    }, error => {
      console.log(error);
    });
  }

}
