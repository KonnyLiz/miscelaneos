import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [`
  /* estamos diciendo que todas las etiquetas p en este componente 
  tendran este estilo */
  p {
    color: red;
    font-size: 30px;
  }
  `]
})

export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
