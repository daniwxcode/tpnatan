import { Component, OnInit } from '@angular/core';
import {Projet} from '../../Model/projet';
import {EtatCivil} from '../../Model/etat-civil';


import { InscriptionService } from './../shared/inscription.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Language {
  name: string;
}

@Component({
  selector: 'app-form-projet',
  templateUrl: './form-projet.component.html',
  styleUrls: ['./form-projet.component.css']
})
export class FormProjetComponent implements OnInit {

  bookForm: FormGroup;

  ngOnInit() { 
    this.InscriptionApi.GetBookList();
    this.submitBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private InscriptionApi: InscriptionService
  ) { }

  

  /* Reactive book form */
  submitBookForm() {
    this.bookForm = this.fb.group({
      intitule : ['', [Validators.required]],
      description  : ['', [Validators.required]],
      estimation: ['', [Validators.required]],      
      dateDebut: ['', [Validators.required]],      
      dateFin: ['', [Validators.required]],
      
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
    if (this.bookForm.valid){
      this.InscriptionApi.AddBook(this.bookForm.value)
      this.resetForm();
    }
  }

}
