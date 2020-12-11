import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from '../app/components/leaderboard/leaderboard.component';
import { AddteamComponent } from '../app/components/addteam/addteam.component';
import { AddwinnerComponent } from '../app/components/addwinner/addwinner.component';

const routes: Routes = [ {path: '', component: LeaderboardComponent},
{path: 'leader_board', component: LeaderboardComponent},
{path: 'add_team', component: AddteamComponent},
{path: 'add_winner', component: AddwinnerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
