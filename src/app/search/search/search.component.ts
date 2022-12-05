import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { Match } from 'src/app/data.dto';
import { MatchesService } from 'src/services/matches.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  controls!: FormControl[];
  dataMatches: Match[] = [];
  dateFrom = '';
  dateTo = '';

  constructor(private matches: MatchesService) {}

  ngOnInit(): void {}

  getMatches(dateFrom: string, dateTo: string) {
    this.matches
      .getMatches(dateFrom, dateTo)
      .pipe(map((el) => el.matches))
      .subscribe((data) => {
        return (this.dataMatches = data);
      });
  }

  getDate(form: FormGroup) {
    if (!this.dateTo) {
      this.dateTo = new Date().toISOString().split('T')[0];

      this.dateFrom = new Date(
        form.value.matchDateFrom.getTime() -
          form.value.matchDateFrom.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split('T')[0];

      console.log(this.dateFrom);
    } else {

      this.dateFrom = new Date(
        form.value.matchDateFrom.getTime() -
          form.value.matchDateFrom.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split('T')[0];

      this.dateTo = new Date(
        form.value.matchDateTo.getTime() -
          form.value.matchDateTo.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split('T')[0];
      console.log(this.dateFrom, this.dateTo);
    }
  }
}
