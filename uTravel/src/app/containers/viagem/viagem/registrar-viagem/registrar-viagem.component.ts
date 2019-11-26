import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Viagem} from '../../../../core/modelos/dominio/viagem.model';
import {BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {AutenticacaoService} from '../../../../core/http/login/autenticacao.service';

@Component({
    selector: 'app-registrar-viagem',
    templateUrl: './registrar-viagem.component.html',
    styleUrls: ['./registrar-viagem.component.scss']
})
export class RegistrarViagemComponent implements OnInit {

    formulario: FormGroup;
    viagem: Viagem;

    @ViewChild('formModal', {static: false}) formModal: any;
    private formularioEnviado = false;

    constructor(
        private modalService: BsModalService,
        private formBuilder: FormBuilder,
        private router: Router,
        public autenticacaoService: AutenticacaoService
    ) { }

    ngOnInit() {
    }

    abrirForm(): void {
        this.formModal.show();
    }

    salvar(): void {

    }
}
