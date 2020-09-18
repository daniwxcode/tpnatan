import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
//import { AuthService } from './../shared/auth.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  message='Bienvenue sur Naatan';
  desc ='Votre plateforme pour une agriculture collaborative'

  
  public menu : boolean;
  title = 'Natan';
  SeConnecter(){
    this.menu = false;
    this.title = 'Bonjour';
  }
  //isLoggedIn$: Observable<boolean>;     
  ngOnInit() {
    this.menu = true;
   // this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
  }             // {1}

  constructor() { }

  

  // onLogout(){
  //   this.authService.logout();                      // {3}
  // }
}
