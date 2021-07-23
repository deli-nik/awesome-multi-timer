import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  timerViews = ['Timer1', 'Timer2'];
  title = 'awesome-multi-timer';
}
