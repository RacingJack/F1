import { Component } from '@angular/core';
import { F1Services } from './app.services';
import { Subscription } from 'rxjs/Subscription';   //update header from another component
import { Subject } from 'rxjs/Subject';             //update header from another component
import { PlatformLocation } from '@angular/common'; //dectect browser back button

// import { StandingsComponent } from './standings/standings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public headerTitle;

  subscription: Subscription;
  constructor(private _f1Services: F1Services, location: PlatformLocation) {
    //detect browser back button
    location.onPopState(() => {
      //update header in app.component.html
      this._f1Services.changeHeader('');
    })

    //update header from another component
    this.subscription = _f1Services.newHeaderTtitle$.subscribe(
      headerTitle => {
        this.headerTitle = headerTitle;
      }
    )
  }

  updateHeaderTitle() {
    this._f1Services.changeHeader('');
  }

}
