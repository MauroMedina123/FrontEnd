import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './Header/banner/banner.component';
import { AcercaDeComponent } from './Header/acerca-de/acerca-de.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { HardAndSoftSkillsComponent } from './hard-and-soft-skills/hard-and-soft-skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaLaboralComponent,
    EstudiosComponent,
    HardAndSoftSkillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
