import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlighting]'
})
export class BetterHighlightingDirective implements OnInit {
  // custom property binding to change directive prop
  @Input() defaultBackgroundColor = 'gold';
  @Input() defaultColor = 'black';

  @Input() highlightBackgroundColor =  '#4a4a4a';
  @Input() highlightColor =  '#fafafa';

  /**
   * directive w/ HostBinding to attach DOM
   * backgroundColor is the name in DOM. which does not know background-color !
   */
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  // sets automatically this.elementRef = elementRef; and creates in Memory
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#4a4a4a');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#fafafa');

    this.color = this.defaultColor;
    this.backgroundColor = this.defaultBackgroundColor;
  }

  @HostListener('mouseenter')
  onMouseEnter(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#4a4a4a');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#fafafa');

    this.backgroundColor = this.highlightBackgroundColor;
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave(eventData: Event) {
    // this.elementRef.nativeElement.style.backgroundColor = 'gold';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#ffffff');

    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }
}
