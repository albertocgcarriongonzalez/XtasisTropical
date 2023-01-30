import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeComponent } from './home/home.component';
import { ProdServComponent } from './prod-serv/prod-serv.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'Prod-Serv', component: ProdServComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'menu', redirectTo: 'https://albertocgcarriongonzalez.github.io/xtasistropical/assets/docs/Menu.pdf'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const urlasset:string = "https://albertocgcarriongonzalez.github.io/xtasistropical/assets";