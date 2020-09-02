import { Injectable } from '@angular/core';
import { Inscription } from './inscription';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  booksRef: AngularFireList<any>;
  bookRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  /* Create book */
  AddBook(book: Inscription) {
    this.booksRef.push({
      book_name: book.intitule,
      description: book.description,
      estimation: book.estimation,
      dateDebut: book.dateDebut,
      dateFin: book.dateFin
     
    })
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  /* Get book */
  GetBook(id: string) {
    this.bookRef = this.db.object('inscription-list/' + id);
    return this.bookRef;
  }  

  /* Get book list */
  GetBookList() {
    this.booksRef = this.db.list('inscription-list');
    return this.booksRef;
  }

  /* Update book */
  UpdateBook(id, book: Inscription) {
    this.bookRef.update({
      book_name: book.intitule,
      description: book.description,
      estimation: book.estimation,
      dateDebut: book.dateDebut,
      dateFin: book.dateFin,
    })
    .catch(error => {
      this.errorMgmt(error);
    })
}


/* Delete book */
DeleteBook(id: string) {
  this.bookRef = this.db.object('inscription-list/' + id);
  this.bookRef.remove()
  .catch(error => {
    this.errorMgmt(error);
  })
}

// Error management
private errorMgmt(error) {
  console.log(error)
}
}