import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuePageComponent } from './issue-page/issue-page.component';

const routes: Routes = [{ path: '', component: IssuePageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
