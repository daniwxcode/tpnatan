import { Guid } from 'guid-typescript';

export class Projet {
    public  key: string;

    constructor(
    public intitule : string,
    public  resume: string,
    public  description : string,
    public estimation : number,
    public  dateDebut ?: Date,
    public  dateFin ?: Date,
    public  photos ?:  string,
    public video?: string,
    public autresFichiers? : string[]){}
}
export const Projets : Projet[]=[
     {
          "key":JSON.stringify(Guid.create().toString()).replace( /\W/g , '') ,
         "intitule":"La culture des champignons",
         "resume": "Le champignon est une autre culture facile à cultiver et consommée dans la plupart des pays du monde. Les champignons sont un phénomène naturel qui peut vous rapporter beaucoup d’argent. Le potentiel inexploité de ces champignons est tel que si vous investissez dans cette entreprise, vous serez surpris du rendement de cette culture.",
         "description":"Les champignons sont riches en vitamines, protéines et minéraux; certaines personnes les préfèrent à la viande ou même au poisson, en raison de leur valeur nutritionnelle et de leurs implications supérieures pour la santé. Il existe deux grandes catégories de champignons. le comestible et le non comestible (qui est toxique). La culture délibérée de champignons est donc essentielle pour éliminer la menace imminente de cueillette par erreur du type toxique, donc dangereux pour la santé.",
          "estimation": 5000000,
         "photos":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.futura-sciences.com%2Fplanete%2Fdossiers%2Fbotanique-notre-guide-champignons-1358%2Fpage%2F2%2F&psig=AOvVaw3ou-UTK9csX_1LqbUQtO_o&ust=1599150217798000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjTjIHxyusCFQAAAAAdAAAAABAD",
         "video": "https://youtu.be/aMnAFL-hooQ",

 }];
     
