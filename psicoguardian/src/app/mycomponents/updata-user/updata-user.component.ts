import { Component, OnInit } from '@angular/core';
import {PsicologosService} from '../../services/user.service';
import {User} from '../../models/user';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-updata-user',
  templateUrl: './updata-user.component.html',
  styleUrls: ['./updata-user.component.css']
})
export class UpdataUserComponent implements OnInit {
  public user: User;
  public documentUser;  
  constructor(
    private service: PsicologosService,
    private routerParams : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    console.log('iniciando User Edit');
    this.documentUser = this.routerParams.snapshot.paramMap.get('documento');
    console.log('consultando User');
    this.getDataUser();
    console.log('cargado');

  }

  updateUser(){
    this.service.updateUser(this.user).subscribe( (res: any) => {
      if (res.statusCode == 200){
        alert(res.message);
        this.router.navigate(['/showAllUsers']);
      }else{
        alert(res.message)
      }
    })
  } 

  getDataUser(){
    this.service.getUser(this.documentUser).subscribe( (res : any) => {
      console.log('User:');
      console.log(res.data);
      this.user = res.data

    })
  }
}
