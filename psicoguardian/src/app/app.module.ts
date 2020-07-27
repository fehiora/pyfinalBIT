import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule}from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './mycomponents/header-component/header-component.component';
import { FooterComponentComponent } from './mycomponents/footer-component/footer-component.component';
import { SliderComponentComponent } from './mycomponents/slider-component/slider-component.component';
import { LoginComponentComponent } from './mycomponents/login-component/login-component.component';
import { from } from 'rxjs';
import { UserSigninComponent } from './mycomponents/user-signin/user-signin.component';

const appRoutes: Routes = [
  {path:'',component: LoginComponentComponent},
  {path:'registro',component: UserSigninComponent}
]

@NgModule({
  /**Componentes */
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    SliderComponentComponent,
    LoginComponentComponent,
    UserSigninComponent
  ],
  imports: [ /**Módulos de ángular que se importan para que funcionen */
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    /**Acá se colocan todos los servicios*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
