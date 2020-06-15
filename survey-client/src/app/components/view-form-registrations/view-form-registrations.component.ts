import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, NavigationEnd, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-view-form-registrations',
  templateUrl: './view-form-registrations.component.html',
  styleUrls: ['./view-form-registrations.component.scss']
})
export class ViewFormRegistrationsComponent implements OnInit {
  uniqueFormId: any;
  registerData: any = [];
  eventName: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService,
    private apiService: ApiService) { }

  ngOnInit(): void {
    let routeParam = this.route.params.subscribe((params: Params): void => {
      this.uniqueFormId = params.id;
    });
    routeParam.unsubscribe();
    this.getDataGenerateForm();
  }

  getDataGenerateForm() {
    let formInfoData = this.apiService.getAllRegistrationsByFormId(this.uniqueFormId, this.storageService.get().currentUser.id).subscribe((registrationdInfo) => {
      this.registerData = registrationdInfo['registrations'].map((item => {
        const data = {};
        data['id'] = item._id;
        data['formId'] = item.formId._id;
        data['formName'] = item.formId.formName;
        data['formData'] = JSON.parse(item.formData);
        return data;
      }));
      this.eventName = (this.registerData.length) ? this.registerData[0].formName : '';
    }, error => {
      console.log('Loading form failed');
    });
    setTimeout(() => {
      formInfoData.unsubscribe();
    }, 2000);
  }

}
