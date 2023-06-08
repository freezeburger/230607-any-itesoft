import { InjectionToken } from "@angular/core";
import { ImageClassifier, ImageReader, ImageTransformer } from "../interfaces/image.interfaces";


export type ImageProcessor = ImageClassifier & ImageTransformer & ImageReader;

export const ITUI_IMAGE_PROCESSOR = new InjectionToken<ImageProcessor>('ITUI_IMAGE_PROCESSOR');
