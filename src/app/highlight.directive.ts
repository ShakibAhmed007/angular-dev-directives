import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() color;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.color);
  }

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
