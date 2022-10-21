import React, { createContext, useEffect, useState } from 'react';
import { ModelSchedule } from '../models/modelSchedule';
import { get, save } from '../servicers/ServiceSchedule';
import { ContextScheduleType } from './ContextScheduleType';

export const ContextSchedule = createContext<ContextScheduleType>({
    events: [],

    addEvent:() => { },
    updateEvent: () => { },
    removeEvent:() => { }
});

const ScheduleProvider = (props: any) =>{
    
    const updateEvent = (pEvent: any) => {

        let index = -1;

        for(var iIndex = 0; iIndex <= events.length-1; iIndex++)
            if(events[iIndex].id == pEvent.event.id){
                index = iIndex;
                break;        
            }

         events[index] = {id: pEvent.event.id, start: pEvent.event.startStr, end: pEvent.event.endStr, title: pEvent.event.title};
         setEvents([...events])
    };

    const [events, setEvents] = useState<ModelSchedule[]>(get); 

    useEffect(()=>{
        save(events);
    }, [events]);


    const addEvent = (pName: string, pStart: string, pEnd: string) => {
        console.log(pName)
        const event: ModelSchedule = {id: (events.length + 1).toString(), start: pStart, end: pEnd, title: pName};
        setEvents([...events, event]);    
    };
   
        
    const removeEvent = (pEvent: any) => {
        const index = events.indexOf(pEvent);
        setEvents(events.filter((_,i)=> i !== index));
    };

    return(
        <ContextSchedule.Provider value={{events, addEvent, removeEvent, updateEvent}}>
           // {props.children}
        </ContextSchedule.Provider>
    );

};

export default ScheduleProvider;