import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './user/inscription/inscription.component';
import { AproposComponent } from './apropos/apropos.component';
import { ListProjetComponent } from './list-projet/list-projet.component'
import { DetailProjetComponent } from './detail-projet/detail-projet.component'
import { FormProjetComponent } from './form-projet/form-projet.component'
import { AcceuilComponent } from './acceuil/acceuil.component'
import { ContactComponent } from './contact/contact.component';
import { ConnexionComponent } from './user/connexion/connexion.component'
//import { AuthService } from './shared/auth.service';
//import { AuthGuard} from './shared/auth.guard'
//import { AcceuilComponent } from './acceuil/acceuil.component'

const routes: Routes = [
  { path: "inscription", component: InscriptionComponent },
  { path: "connexion", component: ConnexionComponent },
  { path: "projet", component: DetailProjetComponent },
  { path: "", component: AcceuilComponent },
  { path: 'a-propos', component: AproposComponent, },
  { path: "list-projet", component: ListProjetComponent },
  { path: 'contact', component: ContactComponent },
  { path: "add-projet", component: FormProjetComponent },
  { path: 'product-details/:key', component: DetailProjetComponent },
  { path: '**', component: AcceuilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
