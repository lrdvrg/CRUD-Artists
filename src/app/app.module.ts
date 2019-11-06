import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { FormularioComponent } from './components/artistas/formulario/formulario.component';
import { ListadoComponent } from './components/artistas/listado/listado.component';
import { ArtistasService } from './services/artistas.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ArtistasComponent,
    FormularioComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [ArtistasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
