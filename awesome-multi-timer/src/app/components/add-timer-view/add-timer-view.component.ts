import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
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

  asyncNumber!: Observable<number>;

  constructor() {
  }

  ngOnInit(): void {
    const initialTime = ConvertTimeDisplayToMs(this.timerConfig.countdownTime);
    this.asyncNumber = interval(this.timerConfig.countdownIntervalInMs).pipe(map(seq => initialTime - (seq * this.timerConfig.countdownIntervalInMs)));
  }
}
