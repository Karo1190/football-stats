import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Match } from 'src/app/data.dto';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
})
export class SearchFilterComponent implements OnInit {
  form!: FormGroup;
  dataMatches: Match[] = [];

  @Output() searchFilterForm = new EventEmitter<FormGroup>();

  constructor() {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = new FormGroup({
      matchDateTo: new FormControl(),
      matchDateFrom: new FormControl(),
    });
  }

  onSearchDate() {
    this.searchFilterForm.emit(this.form);
  }
}
