import { Component, OnInit } from '@angular/core';
import { User} from '../../models/user';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  public user: User;

  /* El constructor es un método de tipe script, al cargar el componente se va a ejecutar primero lo del contructor*/
  constructor() {
    this.user = new User();
   }
  
   /* Este es un constructor de Angular*/
  ngOnInit(): void {
  }

}
