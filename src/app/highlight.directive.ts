import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('yellow');
  }

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
