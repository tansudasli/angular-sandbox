import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlighting]'
})
export class BetterHighlightingDirective implements OnInit {
  // backgroundColor is the name in DOM. which does not know background-color !
  @HostBinding('style.backgroundColor')
  backgroundColor = 'transparent';

  @HostBinding('style.color')
  color = 'black';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#4a4a4a');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#fafafa');
  }

  @HostListener('mouseenter')
  onMouseEnter(eventData: Event) {

    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#4a4a4a');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#fafafa');

    this.backgroundColor = '#4a4a4a';
    this.color = '#fafafa';
  }

  @HostListener('mouseleave')
  onMouseLeave(eventData: Event) {
    // this.elementRef.nativeElement.style.backgroundColor = 'gold';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#ffffff');

    this.backgroundColor = 'gold';
    this.color = '#000';
  }
}
