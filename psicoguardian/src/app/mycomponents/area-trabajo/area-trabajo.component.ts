import { Component, OnInit } from '@angular/core';
import {PsicologosService} from '../../services/user.service';
import {Router, ActivatedRoute} from '@angular/router'
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-area-trabajo',
  templateUrl: './area-trabajo.component.html',
  styleUrls: ['./area-trabajo.component.css']
})
export class AreaTrabajoComponent implements OnInit {
  public path;

  constructor(
    private service: PsicologosService,
    private routerParams : ActivatedRoute,
    private router : Router    

  ) {  }

  ngOnInit(): void {
    this.path = this.routerParams.snapshot.url[0].path;
      if (this.path == 'login'){
         console.log ("este es el usuario" + User)
      }
  }

}
