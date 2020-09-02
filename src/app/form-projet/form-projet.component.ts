import { Component, OnInit } from '@angular/core';
import { Inscription, Inscriptions } from '../shared/inscription';
import { InscriptionService } from './../shared/inscription.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EtatCivil } from '../shared/etat-civil';
import { Guid } from 'guid-typescript';
import { Projet } from '../shared/projet';
import { Participation } from '../shared/participation';

export interface Language {
  name: string;
}

@Component({
  selector: 'app-form-projet',
  templateUrl: './form-projet.component.html',
  styleUrls: ['./form-projet.component.css']
})
export class FormProjetComponent implements OnInit {
 
  ngOnInit() {
    this.InscriptionApi.GetBookList()
      this.submitBookForm();
  }
  inscriptions;
  bookForm : FormGroup;
  constructor(
    public fb: FormBuilder,
    private InscriptionApi: InscriptionService
  ) { }
  submitBookForm() {
    this.bookForm = this.fb.group({
      "nom": '',
      "prenoms": '',
      "email": '',
      "numerowhatsapp": '',
      "compteFacebook": '',
      "compteTwitter": '',
      "professsion": '',
      "intitule": '',
      "resume": '',
      "description": '',
      "estimation": '',
      "dateDebut": '',
      "dateFin": '',
      "photos": '',
      "video": '',
      "autresFichiers": ""
      
    })
  }

 // submitBookForm() {
 //   alert('toto');
 //   this.bookForm = this.fb.group({
 //     "nom": ['', [Validators.required]],
 //     "prenoms": ['', [Validators.required]],
 //     "email": ['', [Validators.required]],
 //     "numerowhatsapp": ['', [Validators.required]],
 //     "compteFacebook": ['', [Validators.required]],
 //     "compteTwitter": ['', [Validators.required]],
 //     "professsion": ['', [Validators.required]],
 //     "intitule": ['', [Validators.required]],
 //     "resume": ['', [Validators.required]],
 //     "description": ['', [Validators.required]],
 //     "estimation": ['', [Validators.required]],
 //     "dateDebut": ['', [Validators.required]],
 //     "dateFin": ['', [Validators.required]],
 //     "photos": ['', [Validators.required]],
 //     "video": ['', [Validators.required]],
 //     "autresFichiers": ""
 //     
 //   })
 // }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.bookForm.controls[controlName].hasError(errorName);
  }



  /* Date */
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.bookForm.get('dateDebut').setValue(convertDate, {
      onlyself: true
    })
  }

  /* Reset form */
  resetForm() {

    this.bookForm.reset();
    Object.keys(this.bookForm.controls).forEach(key => {
      this.bookForm.controls[key].setErrors(null)
    });
  }

  /* Submit book */
  submitBook() {
   
    const data = this.bookForm.value;
    //if (this.bookForm.valid) {
      const etatcivil :EtatCivil ={
        "key":"1",//JSON.stringify(Guid.create().toString()).replace( /\W/g , '') ,
        "nom": data.nom,
        "prenoms": data.prenoms,
        "email":data.email,
        "numerowhatsapp":data.numerowhatsapp,
        "professsion": data.professsion,
        "compteFacebook": data.compteFacebook,
        "compteTwitter": data.compteTwitter
      }
      alert(etatcivil.key);
      const projet: Projet ={
      "key":"1",//JSON.stringify(Guid.create().toString()).replace( /\W/g , '') ,
      "estimation": data.estimation,
      "intitule": data.intitule,
      "description": data.description,
      "resume": data.resume,
      "video": data.video,
      "photos": data.photos
      }
      const participation : Participation ={
        "key":"1",//JSON.stringify(Guid.create().toString()).replace( /\W/g , '') ,
        "participant":etatcivil,
        "valeur":data.estimation
      }
      console.log(this.bookForm);
      const newinscription = new Inscription("1",
      etatcivil,
      projet,[participation]);
      console.log(newinscription);
     
      this.InscriptionApi.AddBook(newinscription);

      this.resetForm();
   // }
  }

}
