import { Injectable } from '@angular/core';
import { ImageClassifier, ImageData, ImageReader, ImageTransformer } from '@itesoft/itl-ui';
import { Observable, BehaviorSubject, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppImageProcessorService implements ImageReader, ImageClassifier, ImageTransformer {

  dataSource$ = new BehaviorSubject<ImageData | null>(null);

  rand = Math.random();
  constructor(){
    console.log(this);
  }

  rotate(data: ImageData): Observable<boolean> {
    return of(false);
  }

  classify(data: ImageData): Observable<boolean> {
     return of(false);
  }

  read(data: ImageData): Observable<boolean> {
     return of(false);
  }

}
