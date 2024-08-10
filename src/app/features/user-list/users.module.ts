import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-pages/users-list/users-list.component';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './users-pages/user-details/user-details.component';
import { UserServices } from './services/userservice';
import { SharedModule } from 'app/shared/shared.module';
import { ComponentsModule } from 'app/core/components/components.module';


@NgModule({
  declarations: [
    UsersListComponent,
    UsersComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    ComponentsModule

  ],
  providers:[
    UserServices
  ]
})
export class UsersModule { }
