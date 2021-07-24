import { TimeDisplay } from "../models/time-display";

export function TimeDisplayToString(timeDisplay: TimeDisplay): string {
    const { hour, minute, second, millisecond } = timeDisplay;
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}.${millisecond.toString().padStart(3, '0')}`;
}
