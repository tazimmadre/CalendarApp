import { Component } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { CalendarEvent } from 'calendar-utils';
import { startOfDay } from 'date-fns';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  viewDate: Date=new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  setView(view: CalendarView) {
    this.view = view;
  }


 events: CalendarEvent[] = [
  {
    start: startOfDay(new Date()),
    title: 'An event with no end date',
  },
  {
    start: startOfDay(new Date()),
    title: 'Second event',
  }
]
}
