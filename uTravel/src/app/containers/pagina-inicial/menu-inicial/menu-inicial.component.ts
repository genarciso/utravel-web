import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginComponent} from '../login/login.component';

declare var $: any;

@Component({
    selector: 'app-menu-inicial',
    templateUrl: './menu-inicial.component.html',
    styleUrls: ['./menu-inicial.component.css']
})
export class MenuInicialComponent implements OnInit {

    @ViewChild('modal', {static: false})
    private loginModal: LoginComponent;

    constructor() {
    }

    ngOnInit() {
    }

    abrirLogin() {
        this.loginModal.abrir();
    }
}
