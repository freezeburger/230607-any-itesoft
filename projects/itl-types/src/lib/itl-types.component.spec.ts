import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItlTypesComponent } from './itl-types.component';

describe('ItlTypesComponent', () => {
  let component: ItlTypesComponent;
  let fixture: ComponentFixture<ItlTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItlTypesComponent]
    });
    fixture = TestBed.createComponent(ItlTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
