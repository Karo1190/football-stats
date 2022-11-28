import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { WorldCupComponent } from './world-cup/world-cup.component';
import { SearchComponent } from './search/search/search.component';
import { SearchFilterComponent } from './search/search/search-filter/search-filter/search-filter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'search', component: SearchComponent},
  {path: 'worldcup', component: WorldCupComponent},
  {path: 'premiereLeague', component: WorldCupComponent},
  {path: 'laLiga', component: WorldCupComponent},
  {path: 'bundesliga', component: WorldCupComponent},
  {path: '**', component: PageNotFoundComponent},


];


@NgModule({
  declarations: [
    AppComponent,
    WorldCupComponent,
    SearchComponent,
    SearchFilterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    RouterModule,
   [RouterModule.forRoot(routes)],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
