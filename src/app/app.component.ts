import { Component } from '@angular/core';
import { MenuService } from './shared/menu.service'
import { ConnexionComponent } from './user/connexion/connexion.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private menuService : MenuService;
  //afficherMenu : boolean = menuService
  menu: boolean= true;
  title = 'Natan';
  SeConnecter(){
    this.menu = false;
    this.title = 'Bonjour';
  }
 

}
