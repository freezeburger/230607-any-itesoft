import { ChangeDetectionStrategy, Component  } from '@angular/core';
import { UIDispatcher } from '../abstract/ui-dispatcher.component';


@Component({
  selector: 'itui-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppBarComponent extends UIDispatcher {

  ngOnInit(){
    this.uiEventDispatcher?.dispatch({payload:null,type:'ITUI_APP_BAR_INIT'})
  }

  handleClick(){
    this.uiEventDispatcher?.dispatch({payload:null,type:'ITUI_APP_BAR_HOME'})
  }

}
