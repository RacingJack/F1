import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { F1Services } from '../app.services';
import { IDriversStandings } from '../drivers';
import { IDriverRaces } from '../driverRaces';
import { GlobalVariables } from '../shared/global';

@Component({
    templateUrl: './constructor.component.html',
    styleUrls: ['./constructor.component.css']
})

export class ConstructorComponent {
    errorMessage: string;
    races: any = [];
    // globConstructor: any;

    constructor(private _f1Services: F1Services, private route: ActivatedRoute, private globalVariables: GlobalVariables) {
        // this.route.params.subscribe((params) => {
        //     this.driverID = params['id'];
        //     this.year = params['year'];
        // });

        //get global variable
        let globYear = this.globalVariables.globalYear;
        let globConstructor = this.globalVariables.globalConstructor;

        //constructor results
        let url: any;
        url = 'http://ergast.com/api/f1/' + this.globalVariables.globalYear + '/constructors/' + this.globalVariables.globalConstructor.constructorId + '/results.json?limit=100';
        this._f1Services.getConstructorResults(url)
            .subscribe(constructorResults => {
                // this.drivers = drivers;
            },
            error => this.errorMessage = <any>error);
    }

}
