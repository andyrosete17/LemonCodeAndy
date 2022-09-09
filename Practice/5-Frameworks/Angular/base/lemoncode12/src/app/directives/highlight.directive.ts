import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input('appHighlight') value = 'lightblue';
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnterEvent() {
    this.highlight(this.value);
  }

  @HostListener('mouseleave')
  onMouseLeaveEvent() {
    this.highlight('');
  }

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
