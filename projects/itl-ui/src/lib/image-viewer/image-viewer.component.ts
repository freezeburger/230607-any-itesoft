import { Component, Inject, Optional } from '@angular/core';
import { ITUI_IMAGE_PROCESSOR, ImageProcessor } from '../tokens/ui-image-processor.token';

@Component({
  selector: 'itui-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent {

  constructor(
    @Optional() @Inject(ITUI_IMAGE_PROCESSOR) private imageProcessor:ImageProcessor
  ){
    console.log(this.imageProcessor)
  }

}
