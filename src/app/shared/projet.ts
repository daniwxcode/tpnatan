export interface Projet {
     $key: string;
     intitule : string;
     resume: string;
     description : string;
     estimation : number;
     dateDebut : Date;
     dateFin : Date;
     photos :  string;
     video: string;
     autresFichiers : string[]
}
