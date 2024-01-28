import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { FilterType } from '../model/filterType';
import { User } from '../model/user';
import { Status } from '../model/issue';
import { UserService } from '../user.service';
import { Observable, Subject, map } from 'rxjs';

@Component({
  selector: 'app-filter-single',
  templateUrl: './filter-single.component.html',
  styleUrls: ['./filter-single.component.css'],
})
export class FilterSingleComponent {
  //TODO handle !
  @Input() newFilterType!: FilterType;
  @Input() index!: number;
  @Output() filters = new EventEmitter<{
    type: string;
    criteria: string;
    value: string;
  }>();

  form = new FormGroup({
    criteria: new FormControl('is', [Validators.required]),
    selectedFilterValue: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  //
  users$: Observable<User[]> = this.userService.getUsers();
  readonly searchTerms$ = new Subject<string>();

  // Values should be populated based on the filter type, hardcoded here just for status
  values: Status[] = ['Resolved', 'Unresolved'];
  criterias: string[] = ['is', 'is not'];

  constructor(private userService: UserService) {}

  //Output the filter criteria and value if there is a value
  changeCriteria(criteria: string) {
    // emit something has changed
    this.form.controls.criteria.setValue(criteria);
    if (this.form.valid) {
      this.filters.emit({
        type: this.newFilterType.key,
        criteria: this.form.controls.criteria.value!,
        value: this.form.controls.selectedFilterValue.value,
      });
    }
  }

  changeValue(value: string) {
    // emit something has changed
    this.form.controls.selectedFilterValue.setValue(value);
    if (this.form.valid) {
      this.filters.emit({
        type: this.newFilterType.key,
        criteria: this.form.controls.criteria.value!,
        value: this.form.controls.selectedFilterValue.value,
      });
    }
  }

  search() {
    this.form.controls.criteria.setValue('includes');
    this.filters.emit({
      type: this.newFilterType.key,
      criteria: this.form.controls.criteria.value!,
      value: this.form.controls.selectedFilterValue.value,
    });
  }

  filterIssuesDate() {
    // Filter issues by creation or due date
  }
}
