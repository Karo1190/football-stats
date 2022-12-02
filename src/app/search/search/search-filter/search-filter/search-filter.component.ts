import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { Match } from 'src/app/data.dto';
import { MatchesService } from 'src/services/matches.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
})
export class SearchFilterComponent implements OnInit {
  form!: FormGroup;
  pickedDate!: Date

  // @Output() searchFilterForm = new EventEmitter<FormGroup>()
  dataMatches: Match[] = [];

  constructor(private matches: MatchesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = new FormGroup({
      matchDate: new FormControl(),
      // testControl: new FormControl(),
    });
  }

  getForm() {

    console.log((this.form.controls["matchDate"].value));
    this.pickedDate = (this.form.controls["matchDate"].value);
    this.pickedDate.getFullYear()
    console.log( this.pickedDate.toLocaleDateString());
    
  }

  getMatches() {
    this.matches
      .getMatches()
      .pipe(map((el) => el.matches))
      .subscribe((data) => {
        return (this.dataMatches = data);
      });
  }
}
