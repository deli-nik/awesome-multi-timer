import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTimerViewComponent } from './components/add-timer-view/add-timer-view.component';
import { TimeDisplayPipe } from './pipes/time-display.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddTimerViewComponent,
    TimeDisplayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
