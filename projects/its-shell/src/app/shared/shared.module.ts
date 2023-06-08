import { NgModule } from '@angular/core';
import { NgImportModule } from './ng-import.module';

@NgModule({
  exports: [
    NgImportModule
  ]
})
export class SharedModule { }
