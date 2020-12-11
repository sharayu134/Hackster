import { Component, OnInit } from '@angular/core';
import { Team } from '../leaderboard/leaderboard.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addwinner',
  templateUrl: './addwinner.component.html',
  styleUrls: ['./addwinner.component.css']
})

export class AddwinnerComponent implements OnInit {

  teamA = new Team('', 0, 0, 0, 0);
  teamB = new Team('', 0, 0, 0, 0);
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  saveWinner(){}
  back(){
    this.router.navigate(['leader_board']);
  }

}
