import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LeaderComponent } from './leader/leader.component';
import { MainComponent } from './main/main.component';
import { RegionComponent } from './region/region.component';
import { ResourceComponent } from './resource/resource.component';
import { TribesComponent } from './tribes/tribes.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'leader', component: LeaderComponent },
  { path: 'resource', component: ResourceComponent },
  { path: 'region', component: RegionComponent },
  { path: 'tribes', component: TribesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
