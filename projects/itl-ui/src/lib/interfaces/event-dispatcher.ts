export interface UIEvent{
    type:string,
    payload:unknown
}

export interface UIEventDispatcher{
    dispatch(event:UIEvent):void;
}
