import { HighlightEmptyDirective } from './highlight-empty.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

describe('HighlightEmptyDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('input'));
    const mockRenderer = {
      addClass: () => {},
      removeClass: () => {}
    } as unknown as Renderer2;
    const mockControl = {
      control: {
        value: ''
      }
    } as unknown as NgControl;

    const directive = new HighlightEmptyDirective(mockElementRef, mockRenderer, mockControl);
    expect(directive).toBeTruthy();
  });
});
