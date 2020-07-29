import { Component, OnInit } from '@angular/core';
import {PsicologosService} from '../../services/user.service';



@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  public user: PsicologosService;
  public allUser: [];
  constructor(
    private service: PsicologosService
  ) { }

  ngOnInit(): void {
    this.showAllUsers();
  }

  showAllUsers(){
    console.log("llegó a la función")
    this.service.getAllUsers().subscribe( (res: any) =>{
        if (res.statusCode == 200){
          this.allUser = res.data
        }else{
        }
    })
  }
}
