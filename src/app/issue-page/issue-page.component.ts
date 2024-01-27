import { Component } from '@angular/core';
import { Issue } from '../model/issue';
import { Observable } from 'rxjs';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-page',
  templateUrl: './issue-page.component.html',
  styleUrls: ['./issue-page.component.css'],
})
export class IssuePageComponent {
  filters: { type: string; criteria: string; value: string }[] = [];

  // This will just complete with initial empty filters
  issues$: Observable<Issue[]> = this.issueService.getIssues(this.filters);

  constructor(private issueService: IssueService) {}

  filterIssues(filter: { type: string; criteria: string; value: string }[]) {
    this.filters = filter;
  }

  // Some behavior when an issue is selected
  selected(issue: Issue) {
    console.log(issue);
  }
}
