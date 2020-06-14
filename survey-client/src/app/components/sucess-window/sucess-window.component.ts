import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-sucess-window',
  templateUrl: './sucess-window.component.html',
  styleUrls: ['./sucess-window.component.scss']
})
export class SuccessWindowComponent implements OnInit {
  @HostListener('window:hashchange', ['$event'])
  hashChangeHandler(e) {
    window.location.hash = "dontgoback";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
