import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServices } from '../../services/userservice';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { trigger, transition, style, animate } from '@angular/animations';

import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Users } from '../../models/users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  animations: [
    trigger('imageAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate(
          '500ms ease-in',
          style({ opacity: 0, transform: 'scale(0.5)' })
        ),
      ]),
    ]),
  ],
})
export class UserDetailsComponent {
  dialogTitle: string = '';
  user: Users;
  constructor(
    public dialogRef: MatDialogRef<UserDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    private route: ActivatedRoute,
    public router: Router,
    public userService: UserServices,
    private ngxService: NgxUiLoaderService,
    public dialog: MatDialog
  ) {
    this.user = data.userDetail;
    this.dialogTitle = this.user.first_name + ' ' + this.user.last_name;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  onNoClick(): void {
    this.dialogRef.close(0);
  }
}
