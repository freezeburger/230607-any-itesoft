import { ReactiveServicePattern } from '@itesoft/itl-patterns';
import { Observable } from 'rxjs'


export interface ImageData {
  url: string;
  text: any;
  classification: any;
}


export interface ImageClassifier extends ReactiveServicePattern<ImageData | null> {
  classify(data: ImageData): Observable<boolean>;
}

export interface ImageReader extends ReactiveServicePattern<ImageData | null> {
  read(data: ImageData): Observable<boolean>;
}

export interface ImageTransformer extends ReactiveServicePattern<ImageData | null> {
  rotate(data: ImageData): Observable<boolean>;
}
