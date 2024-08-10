import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material-module';
import { PrimefaceModule } from './primeFace.module';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';


export class AppModule {}

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    PrimefaceModule,
    NgxUiLoaderModule

  ],
})
export class SharedModule {}
