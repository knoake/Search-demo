import { Injectable } from '@angular/core';
import { Issue } from './model/issue';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  today = new Date();
  mockIssues: Issue[] = [
    {
      title: 'Create issue list',
      creator: { name: 'Katie', id: '123' },
      status: 'Unresolved',
      creationDate: this.today,
    },
    {
      title: 'Clear issue filters',
      creator: { name: 'Katie', id: '123' },
      status: 'Unresolved',
      creationDate: this.today,
    },
    {
      title: 'Save current filters',
      creator: { name: 'Katie', id: '123' },
      status: 'Unresolved',
      creationDate: this.today,
    },
  ];

  getIssues(
    filter: { type: string; criteria: string; value: string }[]
  ): Observable<Issue[]> {
    console.log('here', filter);
    return of(this.mockIssues);
  }

  constructor() {}
}
