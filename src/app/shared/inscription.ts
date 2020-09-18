import { EtatCivil, EtatCivils } from './etat-civil';
import { Projet, Projets } from './projet';
import {Participation, LesParticipations} from './participation'
import { Guid } from 'guid-typescript';

export class Inscription {
  
    constructor(
       public key: string,
    public promoteur: EtatCivil,
    public projet: Projet,
    public participations: Participation[]){}
}
export const Inscriptions : Inscription[]= [{
    "key":JSON.stringify(Guid.create().toString()).replace( /\W/g , '') ,
    "participations": LesParticipations,
    "projet":Projets[0],
    "promoteur": EtatCivils[0]
  
}]