import { Component } from '@angular/core';
import { TimeDisplay } from './models/time-display';
import { TimerConfig } from './models/timer-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  timerViews: TimerConfig[] = [new TimerConfig({} as TimeDisplay, 'Foo', 16), new TimerConfig({} as TimeDisplay, 'Bar', 100)];
  title = 'awesome-multi-timer';
}
