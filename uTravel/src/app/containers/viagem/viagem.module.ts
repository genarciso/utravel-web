import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrcamentoGeralComponent } from './orcamento-geral/orcamento-geral.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { HospedagemComponent } from './hospedagem/hospedagem.component';
import { LocomocaoComponent } from './locomocao/locomocao.component';
import { TurismoComponent } from './turismo/turismo.component';
import {ViagemComponent} from './viagem.component';
import {AppModule} from "../../app.module";

@NgModule({
    declarations: [
        OrcamentoGeralComponent,
        RestauranteComponent,
        HospedagemComponent,
        LocomocaoComponent,
        TurismoComponent
    ],
    exports: [
        OrcamentoGeralComponent,
        RestauranteComponent,
        HospedagemComponent,
        LocomocaoComponent,
        TurismoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ViagemModule { }