import { ModelSchedule } from "../models/modelSchedule";

const EVENT_STORE = 'eventsSchedule';

export const get = (): ModelSchedule[] =>{
    const data = localStorage.getItem(EVENT_STORE)|| '';

    try{
        const result = JSON.parse(data) as ModelSchedule[];
        return result;    
    }
    catch{
        return [];
    }
};

export const save = (data: ModelSchedule[]) =>{
    if(data?.length >= 1)
    localStorage.setItem(EVENT_STORE, JSON.stringify(data));    
};