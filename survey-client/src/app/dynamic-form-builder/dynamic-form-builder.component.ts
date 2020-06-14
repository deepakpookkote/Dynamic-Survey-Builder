import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Params, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'dynamic-form-builder',
  template: `
    <form (ngSubmit)="onSubmit.emit(this.form.value)" [formGroup]="form" class="form-horizontal">
      <div *ngFor="let field of fields">
          <field-builder [field]="field" [form]="form"></field-builder>
      </div>
      <div class="form-row"></div>
      <div class="form-group row">
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <button type="submit" (click)="initRegistration()"  class="btn btn-primary">Register</button>
        </div>
      </div>
    </form>
  `,
})
export class DynamicFormBuilderComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  form: FormGroup;
  uniqueFormId: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
    let routeParam = this.route.params.subscribe((params: Params): void => {
      this.uniqueFormId = params.id;
    });
    routeParam.unsubscribe();
  }

  ngOnInit() {
    let fieldsCtrls = {};
    for (let f of this.fields) {
      fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required);
    }
    this.form = new FormGroup(fieldsCtrls);
  }

  initRegistration() {
    const formData = this.form.value;
    const formInfo: any = {
      formId: this.uniqueFormId,
      formData: JSON.stringify(formData),
    };
    this.apiService.registerEvent(formInfo)
      .pipe()
      .subscribe(data => {
        alert('registration success');
        this.router.navigate(['success']);
      },
        error => {
          console.log(error);
        });
  }
}


