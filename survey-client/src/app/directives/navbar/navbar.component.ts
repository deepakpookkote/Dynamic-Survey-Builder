import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../components/login/authentication.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOpen = false;
  isDropdownOpen = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  toggleDropDown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  viewRegistrations() {
    this.router.navigate(['view-registrations']);
  }

  viewForms() {
    this.router.navigate(['']);
  }

  logout(){
    this.authenticationService.logout();
    setTimeout(() => {
      this.router.navigate(['auth/login']);
    }, 1000);
  }

}
