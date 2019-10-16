import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlighting]'
})
export class BetterHighlightingDirective implements OnInit{

  constructor(private elementRef: ElementRef ,private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#4a4a4a');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#fafafa');
  }
}
