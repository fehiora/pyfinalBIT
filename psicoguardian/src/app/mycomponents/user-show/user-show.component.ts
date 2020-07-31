import { Component, OnInit } from '@angular/core';
import {PsicologosService} from '../../services/user.service';
import {Router, ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  public user: PsicologosService;
  public allUser: [];
  public idUser;
  public path;

  constructor(
    private service: PsicologosService,
    private routerParams : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.path = this.routerParams.snapshot.url[0].path;
      if(this.path == 'deleteUser'){
        this.idUser = this.routerParams.snapshot.paramMap.get('id');
        this.removeUser();
      }else{
        this.showAllUsers();
      }
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

  removeUser(){
    this.service.removeUser(this.idUser).subscribe( (res : any) =>{
      if(res.statusCode == 200){
        alert(res.message);
        this.router.navigate(['/showAllUsers']);
      }else{
        alert(res.message);
      }
    }
    )
  }
  
}
