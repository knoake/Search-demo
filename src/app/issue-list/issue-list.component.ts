import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Issue } from '../model/issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent {
  @Input() issues: Issue[] | undefined;

  @Output() selected = new EventEmitter<Issue>();

  select(issue: Issue) {
    this.selected.emit(issue);
  }
}
