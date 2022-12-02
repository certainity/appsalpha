import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../services/dashboard-data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public dashboardDataAllTeamMembers: any = null;

  constructor(
    private dashboardDataService: DashboardDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dashboardDataService.getAllTeamMembers().subscribe(data => this.dashboardDataAllTeamMembers = data);
  }
}
