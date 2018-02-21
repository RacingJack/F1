//Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//Declarations
import { AppComponent } from './app.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { StandingsComponent } from './standings/standings.component';
import { DriverComponent } from './driver/driver.component';
import { DriverPopupComponent } from './driverpopup/driverpopup.component';
import { ConstructorComponent} from './constructor/constructor.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';
import { routing } from './app.routes';
import { F1Services } from './app.services';
import { GlobalVariables } from './shared/global';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    StandingsComponent,
    DriverComponent,
    DriverPopupComponent,
    ConstructorComponent,
    PageNotFoundComponent
  ],
  imports: [
    Ng2CarouselamosModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [
    F1Services,
    GlobalVariables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
