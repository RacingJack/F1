import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})

export class LandingPageComponent {
  items: Array<any> = [];

  constructor(
    private _router: Router
  ) {
    this.items = [
      { name: 'assets/images/red_bull1.png' },
      { name: 'assets/images/red_bull2.png' },
      { name: 'assets/images/red_bull3.png' },
    ];
  }

  standings() {
    this._router.navigate(["/standings"]);
  }
}