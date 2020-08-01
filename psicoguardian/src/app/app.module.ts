import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule}from '@angular/forms';
import {PsicologosService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './mycomponents/header-component/header-component.component';
import { FooterComponentComponent } from './mycomponents/footer-component/footer-component.component';
import { SliderComponentComponent } from './mycomponents/slider-component/slider-component.component';
import { LoginComponentComponent } from './mycomponents/login-component/login-component.component';
import { UserSigninComponent } from './mycomponents/user-signin/user-signin.component';
import { HomeComponentComponent } from './mycomponents/home-component/home-component.component';
import { UserShowComponent } from './mycomponents/user-show/user-show.component';
import { UpdataUserComponent } from './mycomponents/updata-user/updata-user.component';
import { SearchUserComponent } from './mycomponents/search-user/search-user.component';
import { LoginAdminComponentComponent } from './mycomponents/login-admin/login-admin.component';

const appRoutes: Routes = [
  {path:'',component: HomeComponentComponent},
  {path:'registro',component: UserSigninComponent},
  {path:'showAllUsers', component: UserShowComponent},  
  {path: 'editUser/:id', component: UpdataUserComponent},
  {path: 'deleteUser/:id', component: UserShowComponent},
  {path: 'searchUser', component: SearchUserComponent}
]

@NgModule({
  /**Componentes */
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    SliderComponentComponent,
    LoginComponentComponent,
    UserSigninComponent,
    HomeComponentComponent,
    UserShowComponent,
    UpdataUserComponent,
    SearchUserComponent,
    LoginAdminComponentComponent
  ],
  imports: [ /**Módulos de ángular que se importan para que funcionen */
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    /**Acá se colocan todos los servicios que yo cree*/
    PsicologosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
