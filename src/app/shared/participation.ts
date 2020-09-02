import { EtatCivil } from "./etat-civil";

export interface Participation {
    participant : EtatCivil;
    Description: string;
    valeur: number;
}
