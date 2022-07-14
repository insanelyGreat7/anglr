import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private eleRef: ElementRef ) { 
    eleRef.nativeElement.style.background = "tomato";
    eleRef.nativeElement.style.padding = "20px";
    eleRef.nativeElement.style.borderRadius = "15px";
  }

}
