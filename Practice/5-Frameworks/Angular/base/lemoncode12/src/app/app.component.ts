import { Component } from '@angular/core';
import { MyKeyboarEvent } from './components/utils/custom-search/custom-search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lemoncode12';
  myEventListener() {
    console.log('myEventListener');
  }
  myEvent2Listener(event:MyKeyboarEvent) {
    console.log('myEvent2Listener', event.id, event.tag);
  }
}
