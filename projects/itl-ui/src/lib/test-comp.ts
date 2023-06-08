import { Component, OnInit, forwardRef } from "@angular/core";
import { UIControlValueAccessor } from "./abstract/ui-control-value-acessor.component";
import {  NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'itui-input',
  template: `<input [(ngModel)]="value"  (blur)="onTouch()"> local :{{value}}`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppInput ),
      multi: true,
    }
  ],
})
export class AppInput extends UIControlValueAccessor implements OnInit {

  ngOnInit(): void {
    console.log(this)
  }

}
