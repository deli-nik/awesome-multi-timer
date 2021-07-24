import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';
import { TimeDisplayToString } from '../functions/string-util';
import { ConvertMsToTimeDisplay } from '../functions/time-util';

@Pipe({
  name: 'timeDisplay'
})
export class TimeDisplayPipe implements PipeTransform {

  transform(value: number | null): string {
    if (!value)
      return "00:00:00.000";

    const timeDisplay = ConvertMsToTimeDisplay(value);
    return TimeDisplayToString(timeDisplay);
  }
}
