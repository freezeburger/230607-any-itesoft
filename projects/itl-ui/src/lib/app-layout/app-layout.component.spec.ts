import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutComponent } from './app-layout.component';
import { UIEventDispatcher } from '../interfaces/event-dispatcher';
import { ITUI_EVENT_DISPATCHER } from '../tokens/ui-event-dispatcher.token';

const mockDispatcher: UIEventDispatcher = {
  dispatch(event) {}
}

const CONTENT = 'This is my projected content';


describe('AppLayoutComponent', () => {
  let component: AppLayoutComponent;
  let fixture: ComponentFixture<AppLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppLayoutComponent],
      providers: [
        {
          provide: ITUI_EVENT_DISPATCHER,
          useValue: mockDispatcher
        }
      ]
    });

    // Point d'accès à la feature testée
    fixture = TestBed.createComponent(AppLayoutComponent);
    // Instance du composant
    component = fixture.componentInstance;
    // Rendu Angular déclenché manuellement
    fixture.detectChanges();

    // Activer le rendu Angular Automatique
    // fixture.autoDetectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
