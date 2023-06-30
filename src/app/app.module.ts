import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { LeaderComponent } from './leader/leader.component';
import { ResourceComponent } from './resource/resource.component';
import { RegionComponent } from './region/region.component';
import { TribesComponent } from './tribes/tribes.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    AboutComponent,
    LeaderComponent,
    ResourceComponent,
    RegionComponent,
    TribesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
