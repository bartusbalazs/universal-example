import { Component, OnInit } from '@angular/core';
import {Team} from "../teams/model/team.model";
import {TeamService} from "../services/team.service";
import {TEAMS} from "../teams/model/team-list";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  teams : Team[] = TEAMS;

  constructor(private teamService:TeamService) { }

  ngOnInit(): void {
    // this.initTeams();
  }

  // initTeams(){
  //   this.teamService.getTopTeams().subscribe((teams) => this.teams =
  //     teams);
  // }

}
