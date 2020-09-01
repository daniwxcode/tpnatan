import {Component} from '@angular/core'
export class Utilisateur{
    private id : number;
    private login : string;
    private password : string;
    public getId() : number{
        return this.id;
    }
    public setId(identifiant : number){
        this.id = identifiant;
    }
    public getLogin() : string{
        return this.login;
    }
    public setLogin(log : string){
        this.login = log;
    }
    public getPassword() : string{
        return this.password;
    }
    public setPassword(pass : string){
        this.password = pass;
    }
}