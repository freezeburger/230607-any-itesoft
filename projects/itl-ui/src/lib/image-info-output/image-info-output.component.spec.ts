import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageInfoOutputComponent } from './image-info-output.component';

describe('ImageInfoOutputComponent', () => {
  let component: ImageInfoOutputComponent;
  let fixture: ComponentFixture<ImageInfoOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageInfoOutputComponent]
    });
    fixture = TestBed.createComponent(ImageInfoOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
