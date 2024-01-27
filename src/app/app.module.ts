import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './filter/filter.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssuePageComponent } from './issue-page/issue-page.component';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { FilterSingleComponent } from './filter-single/filter-single.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    IssueListComponent,
    IssuePageComponent,
    FilterSingleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
