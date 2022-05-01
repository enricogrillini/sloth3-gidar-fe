import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from "src/app/service/auth.service";
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivationEnd, Router } from '@angular/router';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  pageTitle: string = "";
  menuCollapsed: boolean;
  modeaa: MatDrawerMode;

  options: FormGroup;

  constructor(
    fb: FormBuilder,
    router: Router,
    private authService: AuthService) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0,
    });

    this.menuCollapsed = localStorage.getItem('app.component.menuCollapsed') == "true";
    this.modeaa = 'side';


    router.events.subscribe(event => {
      if (event instanceof ActivationEnd) {
        this.pageTitle = event.snapshot.data['pageTitle'];
      }
    });
  }

  ngOnInit() {
    if (window.innerWidth < 800) {
      this.modeaa = 'over';
    } else {
      this.modeaa = 'side';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 800) {
      this.modeaa = 'over';
    } else {
      this.modeaa = 'side';
    }
  }


  isMenuCollapsed() {
    return this.menuCollapsed;
  }

  toggleMenu() {
    this.menuCollapsed = !this.menuCollapsed;
    localStorage.setItem('app.component.menuCollapsed', String(this.menuCollapsed));
  }

  isLogged(): boolean {
    return this.authService.isLogged();
  }

  logout() {
    this.authService.logout();
  }
}
