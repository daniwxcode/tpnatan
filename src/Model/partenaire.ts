import {Component} from '@angular/core'
import {Photo} from './photo'
export class Partenaire{
    private id : number;
    private raisonSocial : string;
    private conatct : number;
    private siteWeb : string;
    private logo : Photo;

    public getId() : number{
        return this.id;
    }
    public setId(identifiant : number){
        this.id  = identifiant;
    }
    public getRaisonSocial() : string{
        return this.raisonSocial;
    }
    public setRaisonSocial(raison : string){
        this.raisonSocial = raison;
    }
    public getContact() : number{
        return this.conatct;
    }
    public setContact(cont : number){
        this.conatct = cont;
    }
    public getSiteWeb() : string{
        return this.siteWeb;
    }
    public setSiteWeb(site : string){
        this.siteWeb = site;
    }
    public getLogo() : Photo {
        return this.logo;
    }
    public setLogo(phot : Photo){
        this.logo = phot;
    }

}