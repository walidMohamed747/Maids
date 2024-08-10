import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-layout.routing';
import { CoreModule } from 'app/core/core.module';
import { AdminLayoutComponent } from './admin-layout.component';
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
