//http://ergast.com/api/f1/2017/drivers/hamilton/results.json
export interface IDriverRaces {
    MRData: {
        xmlns: string;
        series: string;
        url: string;
        limit: string;
        offset: string;
        total: string;
        RaceTable: {
            Races: [
                { date: string },
                { raceName: string },
                { round: string },
                { season: string },
                { time: string },
                { url: string },
                {
                    Circuit:
                    {
                        circuitId: string,
                        circuitName: string,
                        url: string,
                        Location:
                        {
                            country: string
                            lat: string,
                            locality: string,
                            long: string
                        }
                    },
                    Results: [
                        { grid: string },
                        { laps },
                        { number },
                        { points },
                        { position },
                        { positionText },
                        { status },
                        {
                            Constructor: {
                                constuctorId: string,
                                name: string,
                                nationality: string,
                                url: string
                            }
                        },
                        {
                            Driver: {
                                code: string,
                                dateOfBirth: string,
                                driverId: string,
                                familyName: string,
                                givenName: string,
                                nationality: string,
                                permanentNumber: string,
                                url: string
                            }
                        },
                        {
                            FastestLap: {
                                Averagespeed: {
                                    speed: string,
                                    units: string
                                }
                                lap: string,
                                rank: string
                                Time: {
                                    time: string
                                },
                                grid: string,
                                laps: string,
                                number: string,
                                points: string,
                                position: string,
                                positionText: string,
                                status: string
                            }
                        },
                        {
                            Time: {
                                millis: string,
                                time: string
                            }
                        }
                    ]
                }
            ],
        }
        driverId: string,
        season: string
    };
}