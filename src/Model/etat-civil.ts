import {Component} from '@angular/core'
export class EtatCivil {
    id : number;
    nom : string;
    prenoms : string;
    dateNaissance : Date;
    professsion : string;
  
    constructor( name: string, prenoms: string){
    this.nom = name;
    this.prenoms = prenoms;
    
  }
}