import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {routing, appRoutingProviders} from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { PersonaComponent } from './persona/persona.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AutosComponent } from './autos/autos.component';
import { ArticuloComponent } from './articulo/articulo.component';
//importar pipe creada
import { ConversorPipe } from './pipes/conversor.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent, 
    PersonaComponent,
    HomeComponent,
    ContactoComponent,
    AutosComponent,
    ArticuloComponent,
    ConversorPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
