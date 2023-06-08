import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImportModule } from './ng-import.module';
import { MatImportModule } from './mat-import.module';

@NgModule({
  exports: [
    NgImportModule,
    MatImportModule
  ]
})
export class SharedModule { }
