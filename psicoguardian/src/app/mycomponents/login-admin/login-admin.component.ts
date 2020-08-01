import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

import {PsicologosService} from '../../services/user.service';

@Component({
  selector: 'app-login-admin-component',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponentComponent {
  @ViewChild('closeModal') closeModal: ElementRef;

  constructor(
    private service: PsicologosService,
    private router: Router
  ) {}

  adminOnSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);

    this.service.adminlogin(f.value).subscribe( (res:any) => {
      switch (res.statusCode){
        case 204:
          alert("Los datos no coinciden");
          break;
        case 200:
          alert("Sesion iniciada");
          this.closeModal.nativeElement.click();
          this.router.navigateByUrl('/showAllUsers');
          break;
        case 400:
          alert("El usuario no existe");
          break;
        case 403:
            alert("El usuario no es Administrador");
            break;
        default:
          alert("Error desconocido");
          break;
      }
    });

  }
  
}
