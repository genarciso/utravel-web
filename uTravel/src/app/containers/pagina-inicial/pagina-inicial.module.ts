import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginaCarregarComponent} from './pagina-carregar/pagina-carregar.component';
import {PaginaInicialComponent} from './pagina-inicial.component';
import {LoginComponent} from './login/login.component';
import {MenuInicialComponent} from './menu-inicial/menu-inicial.component';
import {ServicosComponent} from './servicos/servicos.component';
import {ViagensComponent} from './viagens/viagens.component';
import {VideoComponent} from './video/video.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../app.routing';

@NgModule({
  declarations: [
      PaginaCarregarComponent,
      PaginaInicialComponent,
      LoginComponent,
      MenuInicialComponent,
      ServicosComponent,
      ViagensComponent,
      VideoComponent
  ],
  imports: [
      CommonModule,
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      PerfectScrollbarModule,
      ModalModule.forRoot(),
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot(),
      ReactiveFormsModule,
  ]
})
export class PaginaInicialModule { }
