import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { StandingsComponent } from './standings/standings.component';
import { DriverComponent } from './driver/driver.component';
import { DriverPopupComponent } from './driverpopup/driverpopup.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';

//Route Configuration
export const routes: Routes = [
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'standings', component: StandingsComponent },
  { path: 'driver/:id/:year', component: DriverComponent },
  { path: 'driverpopup', component: DriverPopupComponent },
  { path: 'constructor', component: ConstructorComponent },
  { path: '', redirectTo: '/landingPage', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);