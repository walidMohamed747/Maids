import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-pages/users-list/users-list.component';
import { UserDetailsComponent } from './users-pages/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        redirectTo: 'users-list',
        pathMatch: 'full',
      },
      {
        path: 'users-list',
        component: UsersListComponent,
      },
      {
        path: 'users-details/:id',
        component: UserDetailsComponent,

      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
