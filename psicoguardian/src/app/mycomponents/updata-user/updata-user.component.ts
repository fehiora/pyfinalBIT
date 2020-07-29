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
  public idUser;  
  constructor(
    private service: PsicologosService,
    private routerParams : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idUser = this.routerParams.snapshot.paramMap.get('id');
    this.getDataUser();
  }

  updateUser(){
    /*this.service.updateUser(this.user).subscribe( (res: any)){

    })*/
  } 

  getDataUser(){
    this.service.getUser(this.idUser).subscribe( (res : any) => {
      this.user = res.dataUser

    })
  }
}
