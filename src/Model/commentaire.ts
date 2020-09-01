import {Component} from '@angular/core'
export class Commentaire{
    private id : number;
    private contenu : string;

    public getId() : number{
        return this.id;
    }
    public setId(identifiant : number){
        this.id = identifiant;
    }
    public getContenu() : string{
        return this.contenu;
    }
    public setContenu(cont : string){
        this.contenu = this.contenu;
    }

}