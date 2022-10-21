import React, { useContext } from 'react';
import FullCalendar from '@fullcalendar/react'; 
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ModelSchedule } from '../models/modelSchedule';
import { ContextScheduleType } from '../contexts/ContextScheduleType';
import { ContextSchedule } from '../contexts/ContextSchedule';

interface ScheduleProps{
  events: ModelSchedule[]  
}

const Schedule = (props: ScheduleProps) =>{

  const { addEvent, updateEvent } = useContext<ContextScheduleType>(ContextSchedule);

  
  const clickInsert = (event: any) =>{
    
    let iName = prompt('Qual o nome?');
    
    if(iName == null)
      return;

    let dateStart = new Date(event.dateStr);  
    let dateEnd = new Date(event.dateStr);
    dateEnd.setMinutes(dateStart.getMinutes() + 30); 
  
   addEvent(String(iName), event.dateStr, dateEnd.toISOString());
  }

    const eventClick = (event: any) =>{
      console.log(event.event)    
    }

    return(
        <FullCalendar
            plugins={[ timeGridPlugin, interactionPlugin ]}
            initialView="timeGridWeek"
            allDaySlot={false}
            editable= {true}
            selectable={true}

            eventDrop={updateEvent}
            eventResize={updateEvent}
            eventClick={eventClick}
            dateClick={clickInsert}

            slotDuration="00:30:00"
            slotMinTime="08:00:00"
            slotMaxTime="20:00:00"            

            events={props.events}
        />
    );
}

export default Schedule;