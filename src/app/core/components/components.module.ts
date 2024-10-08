import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule

  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbComponent

  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }

