import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { AuthService} from './../../shared/auth.service'

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connect : boolean;

@Output() connectEvent = new EventEmitter<boolean>()
             // {1}
  //private formSubmitAttempt: boolean; // {2}

  Connecter(){
    this.connectEvent.emit(this.connect)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
