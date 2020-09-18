import { Component, OnInit } from '@angular/core';
import { Projet } from '../shared/projet';
import { InscriptionService } from '../shared/inscription.service';
import { Inscription } from '../shared/inscription';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {
  BookData: any = [];
  constructor(private bookApi: InscriptionService) {
    this.bookApi.GetBookList()
      .snapshotChanges().subscribe(books => {
        books.forEach(item => {
          let a = item.payload.toJSON();
          a['key'] = item.key;
          this.BookData.push(a as Inscription);
        });

      })
  }
  ngOnInit(): void {
  }
  trackByFn(index, item: Inscription) {
    return item.key;
  }

}
