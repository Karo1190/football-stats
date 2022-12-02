export interface Match {
    area: {id: number, name: string, code: string, flag: string };
    competition?: {id: number, name: string, code: string, type: string, emblem: string };
    season: {id: number, startDate: string, endDate: string, currentMatchday: number, winner: string };
    id: number;
    utcDate: string;
    status: string;
    matchday: string;
    stage: string;
    group: string;
    lastUpdated:string;
    homeTeam?: {id: number, name:string, shortName:string, tla:string, crest: string};
    awayTeam?: {id: number, name:string, shortName:string, tla:string, crest: string};
    score?: {winner: string, duration: string, fullTime: {home: number, away: number}, halfTime:{home: number, away: number}};
    odds: {msg: string};
    referees: {id:number, name: string, type: string, nationality: string}

}




// export interface Score{
//     halfTime?: {away: string, home:string};
//     fullTime?: {away: string, home:string};
//     winner?: string
// }

