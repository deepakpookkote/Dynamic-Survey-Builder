import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit {
  public array;
  @Input()
  set myArray(value) {
    if (value) {
      this.array = value;
    }
  }

  public form: FormGroup;
  event;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.array))
    });
    this.event = this.form.valueChanges.subscribe((update) => {
      this.array = JSON.parse(update.fields);
    });
  }

  getFields() {
    return this.array;
  }


}
