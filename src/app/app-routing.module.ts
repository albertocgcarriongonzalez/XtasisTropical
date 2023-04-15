import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeComponent } from './home/home.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { MenuComponent } from './menu/menu.component';
import { ProdServComponent } from './prod-serv/prod-serv.component';

const routes: Routes = [
  { path: '', redirectTo: '/mantenimiento', pathMatch: 'full' },
  
  { path: 'home', component: MantenimientoComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'home', component: HomeComponent },
  { path: 'Prod-Serv', component: ProdServComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'mantenimiento', component: MantenimientoComponent },
  { path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const urlasset:string = "https://albertocgcarriongonzalez.github.io/xtasistropical/assets";