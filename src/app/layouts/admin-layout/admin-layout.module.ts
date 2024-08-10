import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-layout.routing';
import { AdminLayoutComponent } from './admin-layout.component';
import { CoreModule } from 'app/core/core.module';
@NgModule({
  declarations: [
    AdminLayoutComponent,
  ],
  imports: [
    CoreModule,
    AdminRoutingModule,
  ],
  providers: [],
})
export class AdminLayoutModule { }
