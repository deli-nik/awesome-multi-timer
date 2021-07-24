import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take, takeUntil, takeWhile } from 'rxjs/operators';
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

  constructor() {
  }

  ngOnInit(): void {
    this.totalTimeLeftInMs = this.getTimerObservable();
  }

  getTimerObservable(): Observable<number>{
    const initialTime = ConvertTimeDisplayToMs(this.timerConfig.countdownTime);
    const intervalInMs = this.timerConfig.countdownIntervalInMs;

    return interval(this.timerConfig.countdownIntervalInMs)
            .pipe(
              takeWhile(seq => seq * intervalInMs != initialTime, true),
              map(seq => initialTime - (seq * intervalInMs)));
  }
}
