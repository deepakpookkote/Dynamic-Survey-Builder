import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-create-forms',
  templateUrl: './create-forms.component.html',
  styleUrls: ['./create-forms.component.scss']
})
export class CreateFormsComponent implements OnInit {
  builderForm: FormGroup;
  items: FormArray;

  constructor(private fb: FormBuilder,
              private storageService: StorageService,
              private apiService: ApiService,
              private router: Router) {
    this.builderForm = this.fb.group({
      formName: ['', [Validators.required]],
      formFields: this.fb.array([])
    });
  }

  ngOnInit(){

  }

  addNewFormField() {
    let control = <FormArray>this.builderForm.controls.formFields;
    control.push(
      this.fb.group({
        enterFieldName: [''],
        enterType: ['']
      })
    );
  }

  deleteFields(index) {
    let control = <FormArray>this.builderForm.controls.formFields;
    control.removeAt(index);
  }

  deleteProject(control, index) {
    control.removeAt(index);
  }

  saveForm() {
    console.log(this.builderForm.value);
    const formData = this.builderForm.value;
    const formInfo: any = {
      user: this.storageService.get().currentUser.id,
      formName: formData.formName,
      formFields: formData.formFields
    };
    this.apiService.createForm(formInfo)
      .pipe()
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['']);
      },
      error => {
        console.log(error);
      });
  }
}
