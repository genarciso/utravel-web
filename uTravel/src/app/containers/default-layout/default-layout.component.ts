import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {AutenticacaoService} from '../../core/http/login/autenticacao.service';
import {RegistrarViagemComponent} from '../viagem/viagem/registrar-viagem/registrar-viagem.component';


@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html',
    styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {
    private changes: MutationObserver;
    public sidebarMinimized = true;
    public element: HTMLElement;
    @ViewChild('formViagem', {static: false }) formViagem: RegistrarViagemComponent;

    constructor(private autenticacaoService: AutenticacaoService,
        @Inject(DOCUMENT) _document?: any ) {

        this.changes = new MutationObserver((mutations) => {
            this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
        });
        this.element = _document.body;
        this.changes.observe(<Element>this.element, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.changes.disconnect();
    }

    sair(): void {
        this.autenticacaoService.sair();
    }

    abrirForm(): void {
        this.formViagem.abrirForm();
    }


}
