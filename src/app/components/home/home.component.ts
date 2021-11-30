import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h3>ngStyle</h3>
  <app-ng-style></app-ng-style>

  <h3 class="mt-5">CSS en un solo componente</h3>
  <app-css></app-css>

  <p>Este es un parrafo para la prueba del CSS en componente.
    Esto es muy interesante! Y este es el que esta por defecto.
    Te saludo desde el app.component.ts
  </p>

  <h3>Procesos asincronos</h3>
  <app-clases></app-clases>

  <h3>Directivas</h3>

  <p [appResaltado] = "'orange '">
    Las directivas son aquellas que le ponemos 
    como atributos html a las etiquetas.
  </p>
  <p>
    Estas pueden hacerse personalizadas como en este caso.
    Supongo que debe de usarse cuando se ocupa algo en especifico en muchos lugares.
    Estamos desde el app component.
  </p>

  <h3>ngSwitch</h3>
  <app-ng-swich></app-ng-swich>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
