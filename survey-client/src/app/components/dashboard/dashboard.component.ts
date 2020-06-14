import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  public isLoggedIn: any;
  userBasicInfo = {};
  formData: any = [];


  constructor(
    private router: Router,
    private storageService: StorageService,
    private dashboardService: DashboardService,
  ) {
    this.isLoggedIn = (this.storageService.get().currentUser) ? true : '';
  }

  ngOnInit(): void {
    this.getUserBasicInfo();
  }

  getUserBasicInfo() {
    this.dashboardService.getUserInfo(this.storageService.get().currentUser.id).subscribe(userBasicInfo => {
      this.userBasicInfo = userBasicInfo;
      this.getAllForms();
    }, error => {
      console.log('basic info fetch failed', error);
    });
  }

  getAllForms() {
    this.dashboardService.fetchAllForms(this.userBasicInfo['_id']).pipe().subscribe(formData => {
      this.formData = formData['forms'];
    }, error => {
      console.log(error);
    });
  }

  generateAndShareUrl(formId) {
    this.router.navigate(['/generate', formId]);
  }


  navigateToCreateForms() {
    this.router.navigate(['/create']);
  }


  navigateToLoginPage() {
    this.router.navigate(['/auth/login']);
  }



}
