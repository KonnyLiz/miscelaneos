import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(
    private router: ActivatedRoute
  ) {
    this.router.parent?.params.subscribe(res => {
      console.log('hija nuevo', res);
    })
  }

  ngOnInit(): void {
  }

}
