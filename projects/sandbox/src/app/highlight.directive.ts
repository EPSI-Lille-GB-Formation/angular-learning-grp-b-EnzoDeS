import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[Highlight]',
  standalone: true,
})
export class HighlightDirective {
  @HostBinding('style.backgroundcolor')
  bgColor = 'transparent';

  @Input('bg-color')
  bgHighlightColor = 'yellow';

  @Input('default-color')
  bgHighlightDefaultColor = 'tranparent';

  constructor() {}

  ngAfterViewInit() {
    this.bgColor = this.bgHighlightDefaultColor;
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = this.bgHighlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = this.bgHighlightDefaultColor;
  }
}
