import { Component, OnInit } from '@angular/core';
import { Inscription, Inscriptions } from '../shared/inscription';
import { InscriptionService } from './../shared/inscription.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EtatCivil } from '../shared/etat-civil';
import { Guid } from 'guid-typescript';
import { Projet } from '../shared/projet';
import { Participation } from '../shared/participation';

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}

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
  bookForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private InscriptionApi: InscriptionService
  ) { }
  submitBookForm() {
    this.bookForm = this.fb.group({
      "nom": ['', [Validators.required]],
      "prenoms": ['', [Validators.required]],
      "email": ['', [Validators.required, Validators.email]],
      "password": ['', [Validators.required]],
      "confirm": ['', [Validators.required]],
      "numerowhatsapp": ['', [Validators.required, Validators.pattern(/^\+228[9, 7][0 - 9]{ 7 } $/)]],

      //projet
      "intitule": ['', [Validators.required]],
      "resume": ['', [Validators.required]],
      "estimation": ['', [Validators.required]],
      //Etapes à definir
      "video": [''],
      "autresFichiers": ""

    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
  }

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
    console.log(this.bookForm.status);
    if (this.bookForm.valid) {
      const etatcivil: EtatCivil = {
        "key": JSON.stringify(Guid.create().toString()).replace(/\W/g, ''),
        "nom": data.nom,
        "prenoms": data.prenoms,
        "email": data.email,
        "numerowhatsapp": data.numerowhatsapp,

      }

      const projet: Projet = {
        "key": JSON.stringify(Guid.create().toString()).replace(/\W/g, ''),
        "estimation": data.estimation,
        "intitule": data.intitule,
        "resume": data.resume,
        "video": data.video,
        "photos": data.photos
      }
      const participation: Participation = {
        "key": JSON.stringify(Guid.create().toString()).replace(/\W/g, ''),
        "participant": etatcivil,
        "valeur": data.estimation
      }
      console.log(this.bookForm);
      const newinscription = new Inscription("1",
        etatcivil,
        projet, [participation]);
      console.log(newinscription);

      this.InscriptionApi.AddBook(newinscription);

      this.resetForm();
    }
  }

}
