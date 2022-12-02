import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Match } from 'src/app/data.dto';
import { MatchesService } from 'src/services/matches.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  dataMatches: Match[] = []

  constructor(private matches: MatchesService) {}

  ngOnInit(): void {
  }

getMatches(){
  this.matches.getMatches().pipe(map(el => el.matches)) 
  .subscribe((data)=> {   
   return this.dataMatches = data }
  )   
 }
}



