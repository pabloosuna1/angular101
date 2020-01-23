import { Directive, ElementRef, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appRojo]'
})
export class RojoDirective implements OnChanges{

  @Input() nombreComprobar: string;

  constructor(private elementRef: ElementRef) {

   }

   ngOnChanges(){
     if (this.nombreComprobar === 'Marcos') {
        this.elementRef.nativeElement.style.color = 'blue';
     } else {
        this.elementRef.nativeElement.style.color = 'black';
     }
   }

}
