import { Directive, Host } from '@angular/core';
import { ImageComponent } from '../image/image.component';

@Directive({
  selector: '[ituiImageZoom]'
})
export class ImageZoomDirective {

  constructor(
    @Host() private image:ImageComponent
  ) {
    console.log(this)
   }

}
