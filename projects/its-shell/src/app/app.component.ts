import { Component } from '@angular/core';
import { AppImageProcessorService } from './core/services/app-image-processor.service';
import { ITUI_IMAGE_PROCESSOR } from '@itesoft/itl-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'its-shell';
}
