import { Component, EventEmitter, Output, ViewChildren } from '@angular/core';
import { Status } from '../model/issue';
import { User } from '../model/user';
import { FilterType } from '../model/filterType';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Output() filters = new EventEmitter<
    { type: string; criteria: string; value: string }[]
  >();

  // Filter types to add to UI via menu or search
  availableFilterTypes: FilterType[] = [
    {
      key: 'assignee',
      displayName: 'Assignee',
      inputType: 'user',
    },
    {
      key: 'creator',
      displayName: 'Creator',
      inputType: 'user',
    },
    {
      key: 'status',
      displayName: 'Status',
      inputType: 'single-select',
    },
    {
      key: 'search',
      displayName: 'Search',
      inputType: 'text',
    },
  ];

  savedFilters = ['Assigned to me', 'Due this month'];

  currentFilters: FilterType[] = [];
  currentFiltersValue: { type: string; criteria: string; value: string }[] = [];

  constructor() {}

  addFilterInput(filterType: FilterType) {
    this.currentFilters.push(filterType);
    // add new component based on type
  }

  //Add new filter values to existing filter values or replace if a value exists for that instance of the filter
  //Emit new filter values to be used by issue service
  updateFilters(
    newFilter: { type: string; criteria: string; value: string },
    index: number
  ) {
    if (this.currentFiltersValue[index]) {
      this.currentFiltersValue.splice(index, 1, newFilter);
    } else {
      this.currentFiltersValue.push(newFilter);
    }
    this.filters.emit(this.currentFiltersValue);
  }

  //clear all filters
  clearFilters() {
    this.currentFilters = [];
    this.currentFiltersValue = [];
    this.filters.emit(this.currentFiltersValue);
  }

  removeSingleFilter(index: number) {
    if (index > -1) {
      this.currentFilters.splice(index, 1);
      this.currentFiltersValue.splice(index, 1);
    }
    this.filters.emit(this.currentFiltersValue);
  }
}
