import { Component, OnInit } from '@angular/core';
import { MenuService } from './shared/menu.service'
import { ConnexionComponent } from './user/connexion/connexion.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private menuService : MenuService;
  //afficherMenu : boolean = menuService
  afficherAccueil: boolean= true;
  afficherMenu: boolean = true;

  title = 'Natan';
  hideAccueil(){
    this.afficherAccueil = false;
    this.title = 'Bonjour';
  }
  hideMenu(){
    this.afficherMenu = false;
  }

  ngOnInit(){
    this.afficherAccueil = true;
    this.afficherMenu = true;
  }
 

}
