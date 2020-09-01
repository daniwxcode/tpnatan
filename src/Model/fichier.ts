import {Component} from '@angular/core'
export class Fichier{
    private id : number;
    private nomFichier : string;
    private descriptif : string;

    public getId() : number{
        return this.id;
    }
    public setId(identifiant : number){
        this.id = identifiant;
    }
}