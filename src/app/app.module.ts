import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Configuración del locale de la app
import localeEsES from '@angular/common/locales/es';
import localeEsVAL from '@angular/common/locales/ca-ES-valencia';
import localesFrCA from '@angular/common/locales/fr-CA';

import {registerLocaleData} from '@angular/common';

registerLocaleData(localeEsES);
registerLocaleData(localeEsVAL);
registerLocaleData(localesFrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
],
  providers: [
    provideClientHydration(),
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
