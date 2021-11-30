import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(
    private router: ActivatedRoute
  ) {
    router.params.subscribe(res => {
      console.log('padre', res['id']);
    });
  }

  ngOnInit(): void {
  }

}
