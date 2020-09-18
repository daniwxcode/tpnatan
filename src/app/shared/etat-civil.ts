import { Guid } from "guid-typescript";
export class EtatCivil {
    key: string;
    constructor( 
    public nom : string,
    public prenoms : string,
    //public dateNaissance ?: Date,
    public email: string,
    public numerowhatsapp: string,
    public compteFacebook: string,
    public compteTwitter: string,
    public professsion : string){

    }
 
}
let date: Date =new Date("2019-01-16");  
export const EtatCivils : EtatCivil[]=[
    {
        "key":JSON.stringify(Guid.create().toString()).replace( /\W/g , '') ,
        "nom": "DOE",
        "prenoms":"John",
        "email":"me@doe.com",
        "numerowhatsapp":"+228 91378364",
        "compteFacebook":"",
        "compteTwitter":"",
        "professsion": "Codeur"
}];
    
