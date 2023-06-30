import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  isNavbarVisible = true;
  lastScrollPosition = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;
    this.isNavbarVisible = currentScrollPosition <= this.lastScrollPosition || currentScrollPosition < 10;
    this.lastScrollPosition = currentScrollPosition;
  }

  ngOnInit() {
    this.lastScrollPosition = window.pageYOffset;
  }
}
