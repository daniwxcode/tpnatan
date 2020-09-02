import { EtatCivil } from './etat-civil';
import { Projet } from './projet';
import {Participation} from './participation'

export interface Inscription {
    $key: string;
    promoteur: EtatCivil;
    projet: Projet;
    Participations: Participation[];
   
  
}
