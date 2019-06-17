import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PaginaInicialComponent} from './pagina-inicial/pagina-inicial.component';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {PaginaCarregarComponent} from './pagina-inicial/pagina-carregar/pagina-carregar.component';
import {VideoComponent} from './pagina-inicial/video/video.component';
import {MenuInicialComponent} from './pagina-inicial/menu-inicial/menu-inicial.component';
import {ViagensComponent} from './pagina-inicial/viagens/viagens.component';
import {ServicosComponent} from './pagina-inicial/servicos/servicos.component';
import {LoginComponent} from './pagina-inicial/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CabecalhoComponent} from './pagina-central/cabecalho/cabecalho.component';
import {RodapeComponent} from './pagina-central/rodape/rodape.component';
import {DashboardComponent} from './pagina-central/dashboard/dashboard.component';
import {PaginaCentralComponent} from './pagina-central/pagina-central.component';
import {PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

import {
    AppAsideModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
} from '@coreui/angular';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        PaginaInicialComponent,
        PaginaCarregarComponent,
        VideoComponent,
        MenuInicialComponent,
        ViagensComponent,
        ServicosComponent,
        LoginComponent,
        CabecalhoComponent,
        RodapeComponent,
        DashboardComponent,
        PaginaCentralComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppHeaderModule,
        BrowserAnimationsModule,
        PerfectScrollbarModule,
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ReactiveFormsModule,
        AppFooterModule,
        AppAsideModule,
        TabsModule.forRoot(),
        AppSidebarModule,

    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'pt-BR'},
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
