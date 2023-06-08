import { InjectionToken } from "@angular/core";
import { UIEventDispatcher } from "../interfaces/event-dispatcher";


export const ITUI_EVENT_DISPATCHER = new InjectionToken<UIEventDispatcher>('ITUI_EVENT_DISPATCHER');