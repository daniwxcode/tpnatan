import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListProjetComponent } from './list-projet/list-projet.component';
import { DetailProjetComponent } from './detail-projet/detail-projet.component';
import { FormProjetComponent } from './form-projet/form-projet.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ListProjetComponent,
    DetailProjetComponent,
    FormProjetComponent,
    AproposComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
