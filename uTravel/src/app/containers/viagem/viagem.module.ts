import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrcamentoGeralComponent} from './orcamento-geral/orcamento-geral.component';
import {RestauranteComponent} from './restaurante/restaurante.component';
import {HospedagemComponent} from './hospedagem/hospedagem.component';
import {TurismoComponent} from './turismo/turismo.component';
import {SharedModule} from '../../shared/shared.module';
import {BsDatepickerModule, ModalModule} from 'ngx-bootstrap';
import {RegistrarViagemComponent} from './viagem/registrar-viagem/registrar-viagem.component';
import {FormRestauranteComponent} from './restaurante/form-restaurante/form-restaurante.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormTurismoComponent} from './turismo/form-turismo/form-turismo.component';
import {FormHospedagemComponent} from './hospedagem/form-hospedagem/form-hospedagem.component';

@NgModule({
    declarations: [
        FormRestauranteComponent,
        OrcamentoGeralComponent,
        RestauranteComponent,
        HospedagemComponent,
        TurismoComponent,
        RegistrarViagemComponent,
        FormTurismoComponent,
        FormHospedagemComponent,
    ],
    exports: [
        OrcamentoGeralComponent,
        RestauranteComponent,
        HospedagemComponent,
        TurismoComponent,
        RegistrarViagemComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        BsDatepickerModule,
        ModalModule.forRoot(),
        ReactiveFormsModule,
    ]
})
export class ViagemModule { }
