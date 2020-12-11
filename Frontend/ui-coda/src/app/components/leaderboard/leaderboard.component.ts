import { Component, OnInit } from '@angular/core';

import { LeaderboardDataService } from '../../services/leaderboard-data.service';

import { ActivatedRoute, Router } from '@angular/router';

export class Team {
  constructor(
    // tslint:disable-next-line:variable-name
    public team_name: string,
    public wins: number,
    public losses: number,
    public ties: number,
    public score: number
  ) {

  }
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  teams: Team[];
  p = 1;
  title = 'Hacksters Leaderboard';
  constructor(
    private leaderboardDataService: LeaderboardDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.refreshTeams();
  }

  refreshTeams(){
    this.leaderboardDataService.retrieveAllTeams().subscribe(
      response => {
        console.log(response);
        this.teams = response;
      }
    );
  }

  addTeam(){
    this.router.navigate(['add_team']);
  }
  addWinner(){
    this.router.navigate(['add_winner']);
  }
}
