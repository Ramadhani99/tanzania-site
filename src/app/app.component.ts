import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tanzania-project';

  isNavbarFixed = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarFixed = window.pageYOffset > 0;
  }

  ngOnInit() {
    this.isNavbarFixed = window.pageYOffset > 0;
  }
}
