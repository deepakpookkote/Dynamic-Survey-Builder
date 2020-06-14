import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, NavigationEnd, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-guest-forms',
  templateUrl: './guest-forms.component.html',
  styleUrls: ['./guest-forms.component.scss']
})
export class GuestFormsComponent implements OnInit {

  uniqueFormId: any;
  formInfo: any = {};
  formName: any;
  public fields: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) {
  }

  ngOnInit(): void {
    let routeParam = this.route.params.subscribe((params: Params): void => {
      this.uniqueFormId = params.id;
    });
    routeParam.unsubscribe();
    this.getDataGenerateForm();
  }

  getDataGenerateForm() {
    let formInfoData = this.apiService.getFormById(this.uniqueFormId).subscribe((data) => {
      this.formName = data['formName'];
      this.fields = data['formFields'].map(item => {
        const data = {};
        data['type'] = item.enterType;
        data['name'] = item.enterFieldName.toLowerCase().split(" ").join("");
        data['label'] = item.enterFieldName;
        data['value'] = '';
        data['required'] = true;
        return data;
      });
    }, error => {
      console.log('Loading form failed');
    });
    setTimeout(() => {
      formInfoData.unsubscribe();
    }, 2000);
  }
}

