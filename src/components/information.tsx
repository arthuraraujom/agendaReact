import React, { useContext } from 'react';
import { ContextSchedule } from '../contexts/ContextSchedule';
import { ContextScheduleType }  from '../contexts/ContextScheduleType';
import Schedule from './schedule';


const Information = () =>{

    const {events} = useContext<ContextScheduleType>(ContextSchedule);

    return(        
        <Schedule events={events}/>
    )
}

export default Information;