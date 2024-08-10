import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserServices } from '../../services/userservice';
import { Users } from '../../models/users';
import {
  catchError,
  Subscription,
  pipe,
  of,
  Subject,
  filter,
  distinctUntilChanged,
  debounceTime,
  tap,
  switchMap,
  map,
} from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  isToggeled: boolean = false;
  isLoading: boolean = false;
  page: number = 0;
  size: number = 0;
  totalElements: number;
  totalPages: number;
  EmployeesList: Users[] = [];
  dialogTitle: string;
  @ViewChild('input') searchInput: ElementRef;
  dataSource = new MatTableDataSource<Users>();
  //#endregion
  searchInput$ = new Subject<string>();

  private subscription: Subscription = new Subscription();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private searchSubscription: Subscription;

  displayedColumns = ['#', 'image', 'name', 'email', 'actions'];
  constructor(
    public dialog: MatDialog,
    public router: Router,
    public userService: UserServices,
    private ngxService: NgxUiLoaderService,
    private location: Location,

    private cd: ChangeDetectorRef
  ) {
    this.subscription.add(
      (this.searchSubscription = this.searchInput$
        .pipe(
          debounceTime(300),
          distinctUntilChanged(),
          map((searchTerm) => this.filterUsers(searchTerm))
        )
        .subscribe((filteredUsers) => {
          this.dataSource = new MatTableDataSource(filteredUsers);
          this.cd.detectChanges()
        }))
    );
  }
  /******Angular Life Hooks********/
  ngOnInit() {
    this.getFilteredUsersList(this.page);
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /*******Shared Method*********/

  getFilteredUsersList(page?: number) {
    this.ngxService.start();
    this.page = page;
    this.subscription.add(
      this.userService
        .getUsers(this.page + 1)
        .pipe(
          catchError((error) => {
            // Handle the error here
            console.log('error to get users :>> ', error);
            return of(null); // Return an empty observable to continue the flow
          })
        )
        .subscribe((res: any) => {
          this.ngxService.stop();
          this.size = res['per_page'];
          this.totalElements = res.total;
          this.EmployeesList = res.data;
          this.dataSource = new MatTableDataSource(this.EmployeesList);
        })
    );
  }

  /*****Actions methods******/

  // Viewprofile(row: Users) {
  //   this.router.navigate(['/users/users-details/', row.id]);

  // }

  Viewprofile(row: Users) {
    // Update the URL with the user ID
    this.router.navigate([], {
      queryParams: { id: row.id },
      queryParamsHandling: 'merge', // keeps any existing query params in the URL
    });

    const dialogRef = this.dialog.open(UserDetailsComponent, {
      height: 'auto',
      width: '500px',

      autoFocus: true,
      data: {
        userDetail: row,
      },
      closeOnNavigation: true,
      disableClose: true,
    });
    // Handle dialog close and reset the URL
    dialogRef.afterClosed().subscribe(() => {
      this.location.back(); // Goes back to the previous URL
      this.cd.detectChanges()

    });
  }

  onSearch(searchTerm: string) {
    this.searchInput$.next(searchTerm);
  }

  clearSearch(input: HTMLInputElement) {
    input.value = '';
    this.searchInput$.next('');
    this.cd.detectChanges()

  }
  filterUsers(searchTerm: string): Users[] {
    if (!searchTerm) {
      return this.EmployeesList;
    }
    return this.dataSource.data.filter((user) =>
      user.id.toString().includes(searchTerm)
    );
  }

  handlePagtnation($event) {
    this.size = $event.pageSize;
    this.page = $event.pageIndex;
    this.getFilteredUsersList(this.page);
    this.cd.detectChanges();
  }
}
