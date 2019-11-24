import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from '../../../core/modelos/dominio/usuario.model';
import {Router} from '@angular/router';
import {AutenticacaoService} from '../../../core/http/login/autenticacao.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @ViewChild('modalTemplate', {static: false}) modalTemplate: TemplateRef<any>;
    modal: BsModalRef;
    formulario: FormGroup;
    formularioEnviado = false;
    login: Usuario;

    constructor(
        private modalService: BsModalService,
        private formBuilder: FormBuilder,
        private router: Router,
        public autenticacaoService: AutenticacaoService
    ) {
        this.login = new Usuario();
        modalService.onHidden.subscribe(() => {
            this.formularioEnviado = false;
        });

    }

    ngOnInit() {
        this.formulario = this.formBuilder.group({
            usuario: [null, [Validators.required]],
            senha: [null, [Validators.required]]
        });

        this.modalService.onShown.subscribe(() => {
        });

    }

    get loginInvalido(): boolean {
        return this.formularioEnviado && this.formulario.get('usuario').invalid;
    }

    get senhaInvalida(): boolean {
        return this.formularioEnviado && this.formulario.get('senha').invalid;
    }

    abrir() {
        this.modal = this.modalService.show(
            this.modalTemplate, {backdrop: 'static', keyboard: false, class: 'modal-lg'});
    }

    fechar() {
        this.modal.hide();
    }

    confirmar() {
        this.autenticacaoService.entrar(this.login.usuario, this.login.senha);
        this.autenticacaoService.aoEntrar().subscribe(() => {
            this.modal.hide();
            this.router.navigate(['/dashboard']);
        });

    }
}
