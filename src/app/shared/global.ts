import { Injectable } from '@angular/core';

@Injectable()

export class GlobalVariables {
    public globalYear: number;

    public globalDriver: {
        code: string,
        dateOfBirth: string,
        driverId: string,
        familyName: string,
        givenName: string,
        nationality: string,
        permanentNumber: string,
        url: string
    }

    public globalConstructor: {
        constructorId: string,
        name: string,
        nationality: string,
        url: string    }
}
