import {Component} from '@angular/core'
export class Etape{
    private id : number;
    private nom : string;
    private commune : string;

    public getId() : number{
        return this.id;
    }
    public setId(identifiant : number){
        this.id = identifiant;
    }
    public getNom() : string{
        return this.nom;
    }
    public setNom(name : string){
        this.nom = name;
    }
    public getCommune() : string{
        return this.commune;
    }
    public setCommune(com : string){
        this.commune = com;
    }
}