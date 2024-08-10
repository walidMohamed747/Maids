import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
// import {
//   UserData,
//   Login,
// } from '@core/models/model';
import { environment } from '@env';
import { Location } from '@angular/common';
import _, { get } from 'lodash';
import { Login, UserData } from '../models/model';
declare var Swal;
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private token: string;
  private userData: UserData;

  constructor(
    private http: HttpClient,
    protected cookie: CookieService,
    private router: Router,
  ) {}










}
