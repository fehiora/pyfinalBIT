import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

import {PsicologosService} from '../../services/user.service';
import {User} from '../../models/user';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  constructor(
    private service: PsicologosService
  ) {}

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);

    this.service.login(f.value).subscribe( (res:any) => {
      switch (res.statusCode){
        case 204:
          alert("Los datos no coinciden");
          break;
        case 200:
          alert("Sesion iniciada");
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
// export class LoginComponentComponent implements OnInit {
//   public user: User;
//   constructor(
//     private service: PsicologosService
//   ) {
//     this.user =  new User();
//    }

//   ngOnInit(): void {
//   }

//   login(user: string, passwd: string){
//     console.log("user: " + user);
//     // this.service.login(this.user).subscribe( (res: any) =>{
//     //   switch (res.statusCode) {
//     //     case 204:
//     //       alert('Los datos no coinciden');
//     //       break;
//     //     case 200:
//     //       alert('Sesión Iniciada');  
//     //       break;
//     //     case 400:
//     //       alert('El usuario no existe');
//     //       break;
//     //     default:
//     //       alert('Error') 
//     //   }
//     // })
//   }

// }
