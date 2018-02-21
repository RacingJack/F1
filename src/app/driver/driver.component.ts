import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { F1Services } from '../app.services';
import { IDriversStandings } from '../drivers';
import { IDriverRaces } from '../driverRaces';
import { GlobalVariables } from '../shared/global';

@Component({
    templateUrl: './driver.component.html',
    styleUrls: ['./driver.component.css']
})

export class DriverComponent {
    driverID: string;
    year: string;
    drivers: IDriversStandings;
    driverRaces: IDriverRaces;
    errorMessage: string;
    races: any = [];
    globDriver: any;

    constructor(private _f1Services: F1Services, private route: ActivatedRoute, private globalVariables: GlobalVariables) {
        this.route.params.subscribe((params) => {
            this.driverID = params['id'];
            this.year = params['year'];
        });

        // this.route.params.subscribe(
        //     params => this.driverID = params['id'],
        //     params => this.yearID = params['year']
        // );

        //get global variable
        let globYear = this.globalVariables.globalYear;
        this.globDriver = this.globalVariables.globalDriver;

        //driver details
        let url: any;
        url = 'http://ergast.com/api/f1/' + this.year + '/drivers/' + this.driverID + '/driverStandings.json?limit=100';
        this._f1Services.getDriversStandings(url)
            .subscribe(drivers => {
                this.drivers = drivers;
            },
            error => this.errorMessage = <any>error);

        //driver races
        url = 'http://ergast.com/api/f1/' + this.year + '/drivers/' + this.driverID + '/results.json?limit=100';
        this._f1Services.getDriverRaces(url)
            .subscribe(driverRaces => {
                this.races = driverRaces.MRData.RaceTable.Races;
            },
            error => this.errorMessage = <any>error);
    }

}
