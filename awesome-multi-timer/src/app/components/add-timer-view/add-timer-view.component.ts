import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
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
  isPaused!: boolean;
  canLoop!: boolean;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.totalTimeLeftInMs = this.getTimerObservable();
  }

  onClickPauseResume(): void {
    this.isPaused = !this.isPaused;
  }

  onAddCounter(addCounter: number): void {
    this.counter = addCounter;
  }

  onEnableLoop(): void {
    this.canLoop = !this.canLoop;
  }

  getTimerObservable(): Observable<number>{
    const initialTime = ConvertTimeDisplayToMs(this.timerConfig.countdownTime);
    const intervalInMs = this.timerConfig.countdownIntervalInMs;
    this.counter = initialTime;

    // Reference:
    // https://stackoverflow.com/questions/35419062/how-to-stop-and-resume-observable-interval-emiting-ticks
    // https://stackoverflow.com/questions/34921555/how-to-make-countdown-timer-with-rxjs-observables/57694002#57694002
    return interval(this.timerConfig.countdownIntervalInMs)
             .pipe(
               takeWhile(seq => this.counter > 0),
               filter(seq => !this.isPaused),
               tap(seq => this.updateCounter(intervalInMs, initialTime)),
               map(seq => this.counter)
             );
  }

  private updateCounter(intervalInMs: number, initialTime: number) {
    this.counter = this.counter > intervalInMs ? this.counter - intervalInMs : 0;
    if (this.canLoop && this.counter === 0) {
      this.counter = initialTime;
    }
  }
}
