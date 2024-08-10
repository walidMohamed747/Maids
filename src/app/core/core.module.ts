import { CookieService } from 'ngx-cookie-service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ComponentsModule],
})
export class CoreModule {
  static authGuard(): ModuleWithProviders<any> {
    return { ngModule: CoreModule };
  }


  static http(): ModuleWithProviders<any> {
    return { ngModule: CoreModule, providers: [HttpService] };
  }


  static cookieService(): ModuleWithProviders<any> {
    return { ngModule: CoreModule, providers: [CookieService] };
  }

}
