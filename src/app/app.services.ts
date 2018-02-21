import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'; //update header from another component

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IDriversStandings } from './drivers';
import { IConstructorsStandings } from './constructors';
import { IDriverRaces } from './driverRaces';

@Injectable()

export class F1Services {
    constructor(private _http: Http) { }

    getDriversStandings(url): Observable<IDriversStandings> {
        return this._http.get(url)
            .map((response: Response) => <IDriversStandings>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    // getTest(url): Observable<IDrivers> {
    //     return this._http.get(url)
    //         .map(result => {
    //             const items = <IDrivers>result.json();
    //             let test = [];

    //             // test = items.MRData.StandingsTable.StandingsLists[0];
    //             return items;
    //         })
    //         .do(data => console.log('All: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    getDriverRaces(url): Observable<IDriverRaces> {
        return this._http.get(url)
            .map((response: Response) => <IDriverRaces>response.json())
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getConstructorsStandings(url): Observable<IConstructorsStandings> {
        return this._http.get(url)
            .map((response: Response) => <IConstructorsStandings>response.json())
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getConstructorResults(url): Observable<IConstructorsStandings> {
        return this._http.get(url)
            .map((response: Response) => <IConstructorsStandings>response.json())
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getYearDropdown() {
        let currentYear = new Date().getFullYear();
        let yearDD = [];

        let id = 1;

        for (var i = 1950; i <= currentYear; i++) {
            let year = { id: 0, name: '' };
            year.id = id;
            year.name = i.toString();
            yearDD.push(year);
        }

        return yearDD;
    }

    //update header in app.component.html
    private newHeaderTitleSource = new Subject<string>();
    newHeaderTtitle$ = this.newHeaderTitleSource.asObservable();

    changeHeader(val: string) {
        this.newHeaderTitleSource.next(val);
    }

}
