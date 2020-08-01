import { Component, OnInit } from '@angular/core';
import { User} from '../../models/user';
import {PsicologosService} from '../../services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  public user: User;

  /* El constructor es un método de tipe script, al cargar el componente se va a ejecutar primero lo del contructor*/
  constructor(
    private service: PsicologosService,
    private router: Router
  ) {
    this.user = new User();
   }
  
   /* Este es un constructor de Angular*/
  ngOnInit(): void {
  }

  userSignin(registerForm: NgForm){
    //document.getElementById('nombre').value;//hacer validación para que esté diligenciado el formulario
    console.log(registerForm.value);
    console.log(registerForm.valid);
    if(registerForm.valid){
        this.service.registerUser(registerForm.value).subscribe( (res: any) => {
        if (res.statusCode == 200){
          alert(res.message); 
          this.router.navigate(['']);
        }else{
          alert("Error al insertar el usuario");
        }
      })
    }else{
      alert("Debe diligenciar todos los campos");
    }
 
  }

}
