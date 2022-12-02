import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from './services/dashboard-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public listItemVisible = false;
  public dashboardDataNewTeamMembersList: any = null;

  constructor(
    private dashboardDataService: DashboardDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dashboardDataService.getNewTeamMembersList().subscribe(data => this.dashboardDataNewTeamMembersList = data);
  }
}
