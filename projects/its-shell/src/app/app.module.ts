import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ItlUiModule, ITUI_EVENT_DISPATCHER, ITUI_IMAGE_PROCESSOR, UIEvent, UIEventDispatcher } from '@itesoft/itl-ui';

import {Subject} from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ImageProcessorProviderComponent } from './image-processor-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageProcessorProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ItlUiModule,
    SharedModule
  ],
  providers: [
    {
      provide:APP_INITIALIZER,
      useValue: () => {
        const waiter$ = new Subject();
        console.log('Angular is starting the application');

        setTimeout( () => waiter$.complete() , 500 );

        return waiter$;
      },
      multi:true
    },
    {
      provide:APP_INITIALIZER,
      useValue: () => console.log('(SECOND) Angular is starting the application'),
      multi:true
    },
    {
      provide:ITUI_EVENT_DISPATCHER,
      useValue: <UIEventDispatcher>{
        dispatch(event:UIEvent){
          console.log(event)
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('App Module is starting')
  }
}
