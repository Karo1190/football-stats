import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { WorldCupComponent } from './world-cup/world-cup.component';
import { SearchComponent } from './search/search/search.component';
import { SearchFilterComponent } from './search/search/search-filter/search-filter/search-filter.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'search', component: SearchComponent},
  {path: 'worldcup', component: WorldCupComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorldCupComponent,
    SearchComponent,
    SearchFilterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
   [RouterModule.forRoot(routes)],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
