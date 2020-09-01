import { Component, OnInit } from '@angular/core';
import {Projet} from '../../Model/projet';
import {EtatCivil} from '../../Model/etat-civil';

@Component({
  selector: 'app-form-projet',
  templateUrl: './form-projet.component.html',
  styleUrls: ['./form-projet.component.css']
})
export class FormProjetComponent implements OnInit {
  leProjet: Projet = new Projet();
  etatCivil : EtatCivil = new EtatCivil('Daniel','test');
 
  
  constructor() { }

  ngOnInit(): void {
  }

}
