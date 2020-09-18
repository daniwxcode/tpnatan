import { Component, OnInit } from '@angular/core';
import { MenuService } from './shared/menu.service'
import { ConnexionComponent } from './user/connexion/connexion.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private menuService: MenuService;
  afficherAccueil: boolean = true;
  afficherMenu: boolean = true;

  title = 'Nataan';
  hideAccueil() {
    this.afficherAccueil = false;
    this.title = 'Bonjour';
  }
  hideMenu() {
    this.afficherMenu = false;
  }

  ngOnInit() {
    this.afficherAccueil = true;
    this.acceuil = "active";
    this.afficherMenu = true;
  }
  public acceuil: string;
  public about: string;
  public list: string;
  public details: string;
  public contact: string;

  active(menu: string) {
    switch (menu) {
      case "acceuil": {
        this.acceuil = "active";
        this.about = "";
        this.list = "";

        break;
      }

      case "about": {
        this.acceuil = "";
        this.about = "active";
        this.list = "";
        this.details = "";
        this.contact = "";

        break;
      }
      case "list":
        {
          this.acceuil = "";
          this.about = "";
          this.list = "active";
          this.details = "";
          this.contact = "";

          break;
        }
      case "details":
        {
          this.acceuil = "";
          this.about = "";
          this.list = "";
          this.details = "active";
          this.contact = "";

          break;
        }
      case "contact":
        {
          this.acceuil = "";
          this.about = "";
          this.list = "";
          this.details = "";
          this.contact = "active";

          break;
        }
    }
  }


}
