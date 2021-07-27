import { TimeDisplay } from "../models/time-display";

export function ConvertMsToTimeDisplay(totalMilliseconds: number): TimeDisplay {
    let day, hour, minute, second, millisecond;
    millisecond = totalMilliseconds % 1000;
    second = Math.floor(totalMilliseconds / 1000);
    minute = Math.floor(second / 60);
    second = second % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
      hour,
      minute,
      second,
      millisecond
    } as TimeDisplay;
}

export function ConvertTimeDisplayToMs(timeDisplay: TimeDisplay): number {
  const { hour, minute, second, millisecond } = timeDisplay;
  const hourTotalMs = (hour ?? 0) * 60 * 60 * 1000;
  const minuteTotalMs = (minute ?? 0) * 60 * 1000;
  const secondTotalMs = (second ?? 0) * 1000;
  const millisecondTotalMs = millisecond ?? 0;
  return hourTotalMs + minuteTotalMs + secondTotalMs + millisecondTotalMs;
}
