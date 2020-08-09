import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';

import {PsicologosService} from '../../services/user.service';
import {User} from '../../models/user';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  constructor(
    private service: PsicologosService,
    private router: Router
  ) {}

  userOnSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);

    this.service.login(f.value).subscribe( (res:any) => {
      switch (res.statusCode){
        case 204:
          alert("Los datos no coinciden");
          break;
        case 200:
          this.router.navigateByUrl('/areaTrabajo');
          break;
        case 400:
          alert("El usuario no existe");
          break;
        default:
          alert("Error desconocido");
          break;
      }
    });

  }
  
}
