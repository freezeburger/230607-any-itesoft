import { Directive, Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

@Directive({ selector: '[ui-control-value-accessor]' })
export abstract class UIControlValueAccessor implements ControlValueAccessor {

  @Input() public disabled:any = false;
  private _value:any = null;

  get value(){
    return this._value;
  }
  set value( val :any){
    if( !val || this._value === val) return;
    if( this._value ) this.onChange(val);
    this._value = val;
  }

  onChange(value: string):void{}
  onTouch():void{}

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
