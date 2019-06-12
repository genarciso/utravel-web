import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import { PaginaCarregarComponent } from './pagina-inicial/pagina-carregar/pagina-carregar.component';
import { VideoComponent } from './pagina-inicial/video/video.component';
import { MenuInicialComponent } from './pagina-inicial/menu-inicial/menu-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    PaginaCarregarComponent,
    VideoComponent,
    MenuInicialComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      ModalModule.forRoot(),
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot()

  ],
  providers: [
      {provide: LOCALE_ID, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
