import { TimeDisplay } from "./time-display";

export class TimerConfig {
  countdownTime: TimeDisplay;
  countdownIntervalInMs: number;
  label: string;

  constructor(countdownTime: TimeDisplay, label: string, countdownIntervalInMs = 100) {
    this.countdownTime = countdownTime;
    this.label = label;
    this.countdownIntervalInMs = countdownIntervalInMs;
  }
}
