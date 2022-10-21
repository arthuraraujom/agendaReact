import { ModelSchedule } from '../models/modelSchedule';

export interface ContextScheduleType{
    events: ModelSchedule[];

    addEvent(pName: string, pStart: string, pEnd: string): void;
    updateEvent(pEvent: any): void;
    removeEvent(pEvent: any): void;
}