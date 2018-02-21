//http://ergast.com/api/f1/2017/driverStandings.json
export interface IDriversStandings {
    MRData: {
        xmlns: string;
        series: string;
        url: string;
        limit: string;
        offset: string;
        total: string;
        StandingsTable: {
            StandingsLists: [{
                DriverStandings: [
                    {
                        Constructors: [
                            { constructorId: string },
                            { name: string },
                            { nationality: string },
                            { url: string }
                        ],
                        Driver: { 
                            code: string,
                            dateOfBirth: string,
                            driverId: string,
                            familyName: string,
                            givenName: string,
                            nationality: string,
                            permanentNumber: string,
                            url: string
                         },
                        points: string,
                        position: string,
                        positionText: string,
                        wins: string
                    }
                ],
                round: string,
                season: string
            }],
            season: string
        };
    }
}

