import { Component } from '@angular/core';
import { ITUI_IMAGE_PROCESSOR } from '@itesoft/itl-ui';
import { AppImageProcessorService } from './core/services/app-image-processor.service';

@Component({
  selector: 'app-image-processor-provider',
  template: `
    <itui-image-viewer></itui-image-viewer>
  `,
  providers: [
    {
      provide: ITUI_IMAGE_PROCESSOR,
      useClass: AppImageProcessorService
    }
  ]
})
export class ImageProcessorProviderComponent {
}
