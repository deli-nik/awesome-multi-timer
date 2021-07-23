import { Component } from '@angular/core';
import { TimeDisplay } from './models/time-display';
import { TimerConfig } from './models/timer-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  timerViews: TimerConfig[] = [new TimerConfig({} as TimeDisplay, 'Foo', 500), new TimerConfig({} as TimeDisplay, 'Bar', 1000)];
  title = 'awesome-multi-timer';
}
