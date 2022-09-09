import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

export type MyKeyboarEvent = {
  id: number;
  tag: string;
};

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CustomSearchComponent implements OnInit {
  @Input() ph: string = 'Search...';
  valor: string = '';
  @Output() myEvent: EventEmitter<MyKeyboarEvent> = new EventEmitter();
  @Output() myEvent2: EventEmitter<MyKeyboarEvent> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickListener(id: number, tag: string, event: any) {
    console.log('click');
    console.log(event);
    this.myEvent2.emit({id, tag});
  }
}
