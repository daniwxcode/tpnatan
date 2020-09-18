import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
/*fin */

import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListProjetComponent } from './list-projet/list-projet.component';
import { DetailProjetComponent } from './detail-projet/detail-projet.component';
import { FormProjetComponent } from './form-projet/form-projet.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { ConnexionComponent} from  './user/connexion/connexion.component'
import { UserModule} from './user/user.module';

import { InscriptionService } from './shared/inscription.service';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ListProjetComponent,
    DetailProjetComponent,
    FormProjetComponent,
    AproposComponent,
    ContactComponent
   // ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, 
    UserModule
  ],
  providers: [InscriptionService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
 
})
export class AppModule { }
