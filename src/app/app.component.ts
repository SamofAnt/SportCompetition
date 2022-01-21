import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Спортивное соревнование';
  startDate  = new Date("2022-01-24 12:00:00");
}
