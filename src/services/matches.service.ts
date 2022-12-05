import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'src/app/data.dto';


@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  url = 'http://localhost:4200/api/matches';
  private token = '203682e4f50a426cbcb8de3d2f1b5614';
  constructor(private http: HttpClient) {}

  getMatches(dateFrom: string, dateTo: string): Observable<any> {
    const myHeaders = new HttpHeaders({
      'X-Auth-Token': this.token,
    });
    return this.http.get<any>('/api/matches', {params: {dateFrom: dateFrom, dateTo: dateTo}, headers: myHeaders});
  }
}
