import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlighter]',
})
export class HighlighterDirective {
  private backlit = false;

  constructor() {}

  @HostBinding('class.has-background-warning')
  get isBright() {
    return this.backlit;
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.backlit = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.backlit = false;
  }
}