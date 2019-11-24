import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {AppComponent} from './app.component';
// Import containers
import {DefaultLayoutComponent} from './containers';

import {AppAsideModule, AppBreadcrumbModule, AppFooterModule, AppHeaderModule, AppSidebarModule} from '@coreui/angular';
// Import routing module
import {AppRoutingModule} from './app.routing';
// Import 3rd party components
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {PaginaInicialModule} from './containers/pagina-inicial/pagina-inicial.module';
import {DashboardViagemComponent} from './containers/default-layout/dashboard-viagem/dashboard-viagem.component';
import {BsDatepickerModule, ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {ViagemComponent} from './containers/viagem/viagem.component';
import {ViagemModule} from './containers/viagem/viagem.module';
import {SharedModule} from './shared/shared.module';
import {HighchartsChartModule} from 'highcharts-angular';
import {CoreModule} from './core/core.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptorService} from './core/http/http.interceptor.service';

const APP_CONTAINERS = [
    DefaultLayoutComponent,
    DashboardViagemComponent,
    ViagemComponent,
];

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AppAsideModule,
        AppBreadcrumbModule.forRoot(),
        AppFooterModule,
        AppHeaderModule,
        AppSidebarModule,
        PerfectScrollbarModule,
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        PaginaInicialModule,
        ProgressbarModule,
        ViagemModule,
        SharedModule,
        HighchartsChartModule,
        BsDatepickerModule.forRoot(),
        CoreModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        ...APP_CONTAINERS,

    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
        ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
