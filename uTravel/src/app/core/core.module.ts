import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {HttpService} from './http/http.service';
import {AutenticacaoService} from './http/login/autenticacao.service';
import { RestauranteService } from './servicos/crud/restaurante/restaurante.service';

@NgModule({
    providers: [
        HttpService,
        AutenticacaoService,
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

    }
}
