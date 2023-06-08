// abstract/ui-dispacther.component.ts

import { inject } from "@angular/core";
import { UIEventDispatcher } from "../interfaces/event-dispatcher";
import { ITUI_EVENT_DISPATCHER } from "../tokens/ui-event-dispatcher.token";

export abstract class UIDispatcher{
    uiEventDispatcher = inject<UIEventDispatcher | null>(ITUI_EVENT_DISPATCHER);
}
