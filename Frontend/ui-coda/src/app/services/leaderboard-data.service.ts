import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from 'src/app/components/leaderboard/leaderboard.component';


@Injectable({
  providedIn: 'root'
})
export class LeaderboardDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTeams() {
    return this.http.get<Team[]>(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/Leaderboard_Initial_Dataset65148c7.json`);
  }
  createTeam(team){
    return this.http.post(
      `http://localhost:8080/teams`
        , team);
  }

}
