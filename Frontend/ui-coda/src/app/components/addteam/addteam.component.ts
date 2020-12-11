import { Component, OnInit } from '@angular/core';
import { Team } from '../leaderboard/leaderboard.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {

// teams = Team [] ;
  team = new Team('', 0, 0, 0, 0);
  constructor(    private router: Router,
    ) { }

  ngOnInit(): void {
  }
  saveTeam(){}
  back(){
    this.router.navigate(['leader_board']);
  }
}
