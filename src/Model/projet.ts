import {Component} from '@angular/core'
import {Photo} from './photo'
import {Fichier}from './fichier'
export class Projet{
    private id : number;
    private intitule : string;
    private description : string;
    private estimation : number;
    private dateDebut : Date;
    private dateFin : Date;
    private photos :  Array<Photo>
    private autresFichiers : Array<Fichier>
    public getId() : number{
    return this.id;
    }
    public setId(identifiant : number){
    this.id = identifiant;
    }
    public getIntitule() : string{
        return this.intitule;
    }
    public setIntitule(int : string){
        this.intitule= int;
    }
    public getDescription() : string{
        return this.description;
    }
    public setDescritption(desc : string){
        this.description = desc;
    }
    public getEstimation() : number{
        return this.estimation;
    }
    public setEstimation(est : number){
        this.estimation = est;
    }
    public getDateDebut() : Date{
        return this.dateDebut;
    }
    public setDateDebut(debut : Date){
        this.dateDebut = debut;
    }
    public getDateFin() : Date{
        return this.dateFin;
    }
    public setDateFin(fin : Date){
        this.dateFin = fin;
    }
    public getPhotos() : Array<Photo>{
        return this.photos;
    }
    public setPhotos(pho : Array<Photo>){
        this.photos = pho;
    }
    public getAutresFichiers() : Array<Fichier>{
        return this.autresFichiers;
    }
    public setAutresFichiers(files : Array<Fichier>){
        this.autresFichiers = files;
    }
}