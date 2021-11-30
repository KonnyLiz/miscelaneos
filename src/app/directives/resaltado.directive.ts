import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  // el elementref toma todo el elemento y lo que trae dentro de el

  // hostlistener escucha lo que siucede dentro del dom

  // tomamos la variable que mandan desde el elemento
  @Input("appResaltado") color: string = '';

  constructor(
    private er: ElementRef
  ) {
    console.log('directiva ok');
  }

  @HostListener('mouseenter') mouseEntra(){
    this.resaltar(this.color);
  }

  @HostListener('mouseleave') mouseSale(){
    this.resaltar(null);
  }

  private resaltar(clr: string | null = 'yellow'){
    this.er.nativeElement.style.backgroundColor = clr;
  }

}
