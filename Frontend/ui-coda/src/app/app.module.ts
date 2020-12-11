import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { AddteamComponent } from './components/addteam/addteam.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { FormsModule } from '@angular/forms';
import { AddwinnerComponent } from './components/addwinner/addwinner.component';



@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    AddteamComponent,
    HeaderComponent,
    FooterComponent,
    AddwinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
