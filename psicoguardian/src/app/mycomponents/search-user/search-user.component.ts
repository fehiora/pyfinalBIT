import { Component, OnInit } from '@angular/core';
import {PsicologosService} from '../../services/user.service';


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  public dataUser = [];
  constructor(
    private service: PsicologosService
  ) { }

  ngOnInit(): void {
  }

  searchUser(event){
    console.log("Este es el documento->", event.target.value);
    let userDocument = event.target.value;
    // this.service.searchUserByDocument(userDocument).subscribe ( (res: any) =>{
    //   if (res.statusCode == 200){
    //     this.dataUser =  res.data;
    //   }
    // })
  }
}
