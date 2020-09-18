import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inscription } from '../shared/inscription';
import { InscriptionService } from '../shared/inscription.service';

@Component({
  selector: 'app-detail-projet',
  templateUrl: './detail-projet.component.html',
  styleUrls: ['./detail-projet.component.css']
})
export class DetailProjetComponent implements OnInit, OnDestroy {
  key: string;
  private sub: any;
  inscription: any;
  nombre: number;
  private BookData: Inscription[];


  constructor(private route: ActivatedRoute, private bookApi: InscriptionService) {
    this.bookApi.GetBookList()
      .snapshotChanges().subscribe(books => {
        books.forEach(item => {
          let a = item.payload.toJSON();
          if (a['key'] == this.key) {
            this.inscription = a;

          }
        });

      })
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.key = params['key']; // (+) converts string 'id' to a number

      this.inscription = this.BookData.find(p => p.key = this.key);

      console.log(this.inscription);
      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}