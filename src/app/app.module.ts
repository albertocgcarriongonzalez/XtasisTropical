import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProdServComponent } from './prod-serv/prod-serv.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ContactoComponent,
    ContenedorComponent,
    EmpresaComponent,
    FooterComponent,
    HomeComponent,
    NavBarComponent,
    ProdServComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
