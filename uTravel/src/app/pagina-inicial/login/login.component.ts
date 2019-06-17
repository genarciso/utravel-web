import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from '../../core/modelos/usuario.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @ViewChild('modalTemplate') modalTemplate: TemplateRef<any>;
    modal: BsModalRef;
    formulario: FormGroup;
    formularioEnviado = false;
    login: Usuario;
    usuario: string;
    senha: string;
    constructor(
        private modalService: BsModalService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
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
        this.modal.hide();
        this.router.navigate(['/dashboard']);
    }
}
