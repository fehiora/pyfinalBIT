/**Se importan módulos de angular para hacer el servicio, 
 * el modulo injectable recoge los datos, el http client sirve para que
 * se puedan recibir los datos desde la URL 
 * El observable rxjs se crea con ángular*/

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable() //permite usar el injectable en otros lados del proyecto
export class PsicologosService{
    apiURL = 'http://localhost:3000/apipsicoguardian';
    opt = {headers: new HttpHeaders({ 'Content-type': 'application/json' })};
    constructor(
        private http: HttpClient
    ){}

    registerUser(userParams){
        //JSON.stringify sirve para convertir un string de JS a JSON porque en el api se maneja solo JSON y por eso hay que trasformarlo
        const params = JSON.stringify(userParams);
        return this.http.post(
            this.apiURL,
            params,
            this.opt
            ).pipe (res => res);
    }

    getAllUsers(){
        return this.http.get(
            this.apiURL + '/allUser',
            this.opt
        )
    }

    updateUser(userParams){
        console.log( "userParams--->", userParams);
        const params = JSON.stringify(userParams);
        return  true;
    }

    getUser(userId){
        return this.http.get(
            this.apiURL + '/getUser' + userId,
            this.opt
        )
    }
}
