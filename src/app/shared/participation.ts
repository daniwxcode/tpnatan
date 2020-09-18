import { EtatCivil,EtatCivils } from "./etat-civil";
import { Guid } from 'guid-typescript';

export class Participation {
    public key : string;
    constructor(public participant: EtatCivil,
        public valeur: number,
        public Description?: string
        ) { 
            this.key= JSON.stringify(Guid.create().toString()).replace( /\W/g , '');
        }

}
export const LesParticipations : Participation[]=[
    {
        "key" :JSON.stringify(Guid.create().toString()).replace( /\W/g , ''),
        "participant": EtatCivils[0],
        "valeur":100000,
        "Description":"ras"
}];