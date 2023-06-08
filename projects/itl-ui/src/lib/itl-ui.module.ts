import { NgModule } from '@angular/core';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SharedModule } from './shared/shared.module';
import { AppInput } from './test-comp';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';
import { ImageInfoOutputComponent } from './image-info-output/image-info-output.component';
import { ImageZoomDirective } from './directives/image-zoom.directive';

@NgModule({
  declarations: [
    AppBarComponent,
    AppLayoutComponent,
    AppInput,
    ImageViewerComponent,
    ButtonComponent,
    ImageComponent,
    ImageInfoOutputComponent,
    ImageZoomDirective
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AppBarComponent,
    AppLayoutComponent,
    AppInput,
    ImageViewerComponent,
    ButtonComponent,
    ImageComponent
  ]
})
export class ItlUiModule { }
