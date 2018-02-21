import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { F1Services } from '../app.services';
import { IDriversStandings } from '../drivers';
// import { YearDropdown } from '../years';
import { Router } from '@angular/router';
import { GlobalVariables } from '../shared/global';
import * as _ from 'lodash';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DriverPopupComponent } from '../driverpopup/driverpopup.component';
// import { AppComponent } from '../app.component';


class Driver {
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  permanentNumber: string;
  url: string;
}

class Constructor {
  constructorId: string;
  name: string;
  nationality: string;
  url: string;
}

@Component({
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
  // providers: [AppComponent],
})

export class StandingsComponent implements OnInit {
  url: any;
  year: any;
  driversConstructorsText: string;
  driversTable: boolean;
  constructorsTable: boolean;
  // years: any = [];
  title = 'app';
  errorMessage: string;
  drivers: IDriversStandings;
  driversList: any = [];
  constructorsList: any = [];
  selectedYear: any;
  // years: YearDropdown[];
  //yearDropdown: any = [];

  constructor(
    private _f1Services: F1Services,
    private _router: Router,
    private globalVariables: GlobalVariables,
    private modalService: NgbModal
    // private appComponent: AppComponent
  ) { }

  // SelectedCourse: any;
  // AllCourses: any = [
  //   { name: "Angular", course: 'Angular' },
  //   { name: "NodeJs", course: 'NodeJs' }
  // ]

  //selectedYear: any;
  //  = this._f1Services.getYearDropdown();
  yearDropdown = this._f1Services.getYearDropdown();

  // years = [
  //   new YearDropdown(1, '2017'),
  //   new YearDropdown(2, '2016'),
  // ];

  // years:any=[
  //   {id: 1, name: '2017'},
  //   {id: 2, name: '2016'}
  // ]

  Filter(value: any) {
    let test = [];

    this.year = value;

    let testYear = '1961';
    // this.selectedYear = _.find(this.yearDropdown, { 'name': testYear });

    // this.appComponent.test = 'test nieuw';
    //set global variable year
    this.globalVariables.globalYear = value;

    this.url = 'http://ergast.com/api/f1/' + value + '/driverStandings.json?limit=100';

    // this._f1Services.getTest(url)
    // .subscribe(drivers => {
    //   // this.drivers = drivers;

    //   let driver = drivers;
    //   let standingsList = drivers.MRData.StandingsTable.StandingsLists[0];
    //   // for (var i = 0; i < this.drivers.length; i++) {
    //   //   var driver = this.drivers[i];
    //     // console.log(driver.);
    // // }

    // },
    // error => this.errorMessage = <any>error);


    this._f1Services.getDriversStandings(this.url)
      .subscribe(drivers => {

        this.driversList = drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        // for (var i = 0; i < this.driversList.length; i++) {
        //   var driver = this.driversList[i];
        //   console.log(driver.Driver.familyName);
        // }


        //this.drivers = drivers;


      },
      error => this.errorMessage = <any>error);
  }

  public ngOnInit() {
    let globalYear = this.globalVariables.globalYear;
    let currentYear;

    this.driversConstructorsText = 'Constructors';
    this.driversTable = true;
    this.constructorsTable = false;

    //update header in app.component.html
    this._f1Services.changeHeader('/ Standings');

    if (globalYear) {
      currentYear = globalYear;
    }
    else {
      currentYear = new Date().getFullYear();
    }

    this.year = currentYear;
    this.selectedYear = this.year;

    this.url = 'http://ergast.com/api/f1/' + currentYear + '/driverStandings.json';

    this._f1Services.getDriversStandings(this.url)
      .subscribe(drivers => {
        if (drivers.MRData.StandingsTable.StandingsLists.length > 0) {
          this.driversList = drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        }
      },
      error => this.errorMessage = <any>error);

    // this.years = this._f1Services.getYearDropdown();
    // this._f1Services.getFormulas()
    //   .subscribe(formulas => {
    //     this.formulas = formulas;

    //     for (var i = 0; i < this.formulas.length; i++) {
    //       var formula = this.formulas[i];
    //       console.log(formula.id);
    //     }

    //   },
    //   error => this.errorMessage = <any>error);

    // this._f1Services.getF1()
    //   .subscribe(f1 => {
    //     // let test = JSON.stringify(f1)
    //     this.f1 = f1;

    // let test = subset(this.f1);

    // var test = data[0].MRData.series;

    // let field1 = 'MRData.StandingsTable';
    // let limit = this.f1[0].limit;
    // let driverStandings = this.f1[field1];
    // for(var wa in this.f1.entries){
    //   console.log('hallo');
    // }
    // var field1 = '.MRData.StandingsTable.StandingsLists[0].DriverStandings';
    // var driverStandings = this.f1[field1];

    //var standingList = this.f1.MRData.StandingsTable
    // for (var i = 0; i < this.f1.length; i++) {
    // var f1Array;
    // var f1Array = this.f1.
    // console.log(f1Rec.MRData);
    // }

    // },
    // error => this.errorMessage = <any>error);

    //   function subset(obj: IF1) {
    //     return {
    //         series: obj.MRData.series,
    //         url: obj.MRData.url
    //     }
    // }
  }

  driversConstructors() {
    if (this.driversConstructorsText == 'Drivers') {
      //show Drivers
      this.driversConstructorsText = 'Constructors';
      this.driversTable = true;
      this.constructorsTable = false;
    }
    else {
      //show Constructors
      this.driversConstructorsText = 'Drivers';
      this.driversTable = false;
      this.constructorsTable = true;

      if (this.constructorsList.length == 0) {
        this.url = 'http://ergast.com/api/f1/' + this.year + '/constructorStandings.json';
        this._f1Services.getConstructorsStandings(this.url)
          .subscribe(constructors => {
            this.constructorsList = constructors.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
          },
          error => this.errorMessage = <any>error);
      }
    }
  }

  onSelectDriver(driver: Driver): void {
    //set global variable driver
    this.globalVariables.globalDriver = driver;
    this._router.navigate(["/driver", driver.driverId, this.year]);
  }

  onSelectConstructor(constructor: Constructor): void {
    //set global variable constructor
    this.globalVariables.globalConstructor = constructor;
    // this.globalVariables.globalDriver = driver;
    this._router.navigate(["/constructor"]);
  }

  onSelectTest(driver: Driver): void {
    //set global variable driver
    this.globalVariables.globalDriver = driver;
    this._router.navigate(["/driver", driver.driverId, this.year]);
  }

  public testPopup() {
    let options: NgbModalOptions = {
      keyboard: false,
      size: 'lg'
    };
    const modalRef = this.modalService.open(DriverPopupComponent, options);
    modalRef.componentInstance.fld1 = 'veld1';
    modalRef.componentInstance.fld2 = 'veld2';
    modalRef.result.then((data) => {
      if (data !== 'close') {

      }
    });
  }

}
