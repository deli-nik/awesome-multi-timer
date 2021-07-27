import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { delay, filter, map, mapTo, take, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { ConvertMsToTimeDisplay, ConvertTimeDisplayToMs } from '../../functions/time-util';
import { TimeDisplay } from '../../models/time-display';
import { TimerConfig } from '../../models/timer-config';

@Component({
  selector: 'app-add-timer-view',
  templateUrl: './add-timer-view.component.html',
  styleUrls: ['./add-timer-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTimerViewComponent implements OnInit {

  @Input()
  timerConfig!: TimerConfig;

  totalTimeLeftInMs!: Observable<number>;
  counter!: number;
  pause!: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.totalTimeLeftInMs = this.getTimerObservable();

    setTimeout(() => this.counter += 3000, 2000);
    setTimeout(() => this.pause = true, 5000);
    setTimeout(() => this.pause = false, 7000);
  }

  getTimerObservable(): Observable<number>{
    const initialTime = 10000;//ConvertTimeDisplayToMs(this.timerConfig.countdownTime);
    const intervalInMs = this.timerConfig.countdownIntervalInMs;
    this.counter = initialTime;

    return interval(this.timerConfig.countdownIntervalInMs)
             .pipe(
               takeWhile(seq => this.counter > 0),
               filter(seq => !this.pause),
               tap(seq =>
                {
                  this.counter = this.counter > intervalInMs ?
                    this.counter - intervalInMs : 0;
                }),
               map(seq => this.counter)
             );
  }
}
