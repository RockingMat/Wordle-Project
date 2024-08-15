import React from 'react';
import { NotifProps } from './props';

export default function Notif({props, setProps} : NotifProps){
    return (
        <div className={`Notif ${props.showing ? 'alert-shown' : 'alert-hidden'}`}
        onTransitionEnd={() => setProps({showing: false, message: props.message})}>
            {props.message}
        </div>
    );
}
