import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appHighlightEmpty]',
})
export class HighlightEmptyDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private control: NgControl
  ) {}

  @HostListener('blur')
  onBlur() {
    const value = this.control.control?.value;
    if (!value || value.trim() === '') {
      this.renderer.addClass(this.el.nativeElement, 'empty-field');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'empty-field');
    }
  }
}
