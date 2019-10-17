import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlighting]'
})
export class BasicHighlightingDirective implements OnInit {

  constructor(private elementRef: ElementRef) {

  }

  /**
   * accessing element
   * 1st way : this.elementRef.nativeElement.style.backgroundColor = 'gold';
   * 2nd way : use Renderer2 class (better way but not interactive
   * 3rd way : HostListener + Renderer2 class for interactive DOM manipulation such as mouserover events
   */
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'gold';
  }


}
