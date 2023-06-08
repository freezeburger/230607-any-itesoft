import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppBarComponent } from './app-bar.component';
import { ITUI_EVENT_DISPATCHER } from '../tokens/ui-event-dispatcher.token';
import { UIEventDispatcher } from '../interfaces/event-dispatcher';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

const CONTENT = 'This is my projected content';
const CONTENT_CHANGE = 'This is a DIFFERENT projected content';

@Component({
  selector:'test-host',
  template:`
    <itui-app-bar>{{content}}</itui-app-bar>
  `
})
class HostComponent{
  content = CONTENT;
}

const mockDispatcher: UIEventDispatcher = {
  dispatch(event) {}
}



describe('AppBarComponent', () => {
  let component: AppBarComponent;
  let fixture: ComponentFixture<AppBarComponent>;

  let hostComponent: HostComponent;
  let hostFixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppBarComponent,
        HostComponent
      ],
      imports:[
        MatToolbarModule
      ],
      providers: [
        {
          provide: ITUI_EVENT_DISPATCHER,
          useValue: mockDispatcher
        }
      ]
    });

    fixture = TestBed.createComponent(AppBarComponent);
    component = fixture.componentInstance;

    hostFixture = TestBed.createComponent(HostComponent);
    hostComponent = hostFixture.componentInstance;

    fixture.detectChanges();
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display ITESOFT', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toBe('ITESOFT');
  });

  it('should display projected content', () => {

    const compiled = hostFixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('itui-app-bar>mat-toolbar>h1+nav')?.textContent).toBe( CONTENT );
  });

  it('should reflect projected content changes ', () => {

    const compiled = hostFixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('itui-app-bar>mat-toolbar>h1+nav')?.textContent).toBe( CONTENT );

    hostComponent.content = CONTENT_CHANGE;
    hostFixture.detectChanges();
    expect(compiled.querySelector('itui-app-bar>mat-toolbar>h1+nav')?.textContent).toBe( CONTENT_CHANGE );

  });

  it('should dispatch and event OnInit ', async () => {

    const fixture = TestBed.createComponent( AppBarComponent );
    const spyDispatch = spyOn( mockDispatcher, 'dispatch' );

    fixture.detectChanges();
    await fixture.whenStable();

    expect( spyDispatch ).toHaveBeenCalled() ;
    const eventTest  = { payload:null, type:'ITUI_APP_BAR_INIT' }
    expect( spyDispatch ).toHaveBeenCalledOnceWith(eventTest) ;

  });

  it('should dispatch ITUI_APP_BAR_HOME event type on H1 CLICK ', async () => {

    const spyDispatch = spyOn( mockDispatcher, 'dispatch' );
    const eventTest  = { payload:null, type:'ITUI_APP_BAR_HOME' };


    fixture.nativeElement.querySelector('h1').click();
    expect( spyDispatch ).toHaveBeenCalledWith(eventTest) ;

  });

});
