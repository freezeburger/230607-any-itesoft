import { AfterViewInit, Component, DoCheck, HostListener, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { UIDispatcher } from '../abstract/ui-dispatcher.component';

interface FullLifeCycle extends OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit {}

@Component({
  selector: 'itui-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent extends UIDispatcher implements OnInit, OnDestroy {

  ngOnInit(){
    this.uiEventDispatcher?.dispatch({payload:null,type:'APP_LAYOUT_INIT'})
  }

  @HostListener('window:resize', ['$event'])
  resize( event:Event ){
    this.uiEventDispatcher?.dispatch({payload:null,type:'APP_LAYOUT_RESIZE'})
  }

  ngOnDestroy(): void {
    this.uiEventDispatcher?.dispatch({payload:null,type:'APP_LAYOUT_DESTROY'})
  }

}
