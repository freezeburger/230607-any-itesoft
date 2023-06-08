import { Component, Host } from '@angular/core';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
  selector: 'itui-image-info-output',
  templateUrl: './image-info-output.component.html',
  styleUrls: ['./image-info-output.component.css']
})
export class ImageInfoOutputComponent {

  constructor(
    @Host() private viewer:ImageViewerComponent
  ){}
}
