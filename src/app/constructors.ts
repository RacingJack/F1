//http://ergast.com/api/f1/2017/constructorStandings.json
export interface IConstructorsStandings {
    MRData: {
        limit: string;
        offset: string;
        series: string;
        total: string;
        url: string;
        xmlns: string;
        StandingsTable: {
            StandingsLists: [{
                ConstructorStandings: [
                    {
                        Constructor: { 
                            constructorId: string,
                            name: string,
                            nationality: string,
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
        };
    }
}

