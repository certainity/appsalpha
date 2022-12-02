import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dashboardDataTeamMembersGrid: any = null;
  public dashboardDataTeamGrowth: any = null;

  constructor(
    private dashboardDataService: DashboardDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dashboardDataService.getTeamMembersGrid().subscribe(data => this.dashboardDataTeamMembersGrid = data);
    this.dashboardDataService.getTeamGrowth().subscribe(data => this.dashboardDataTeamGrowth = data);
  }
}
