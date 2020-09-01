import {Component} from '@angular/core'
export class Etape{
    private id : number;
    private libelle : string;
    private resultat : string;

    public getId() : number{
        return this.id;
    }
    public setId(identifiant : number){
        this.id = identifiant;
    }
    public getLibelle() : string{
        return this.libelle ;
    }
    public setLibelle(lib : string){
        this.libelle = lib;
    }
    public getResultat() : string{
        return this.resultat;
    }
    public setResultat(res : string){
        this.resultat = res;
    }

}