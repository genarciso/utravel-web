import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Restaurante } from '../../../../core/modelos/dominio/restaurante.model';

class RestauranteDTO {
    dataIdaPrevista: Date;
    valorGastoPrevisto: number;
    nome: string;
}

@Component({
    selector: "form-restaurante",
    templateUrl: "./form-restaurante.component.html",
    styleUrls: ["./form-restaurante.component.css"]
})
export class FormRestaurante implements OnInit {
    @ViewChild("formRestauranteTemplate", { static: false })
    modalTemplate: TemplateRef<any>;

    modal: BsModalRef;
    formulario: FormGroup;
    formularioEnviado = false;

    restauranteDTO: RestauranteDTO;

    constructor(
        private modalService: BsModalService,
        private formBuilder: FormBuilder
    ) {
        this.restauranteDTO = new RestauranteDTO();

        modalService.onHidden.subscribe(() => {
            this.formularioEnviado = false;
        });
    }

    ngOnInit() {
        this.formulario = this.formBuilder.group({
            nomeRestaurante: [null, [Validators.required]],
            dataIdaPrevista: [null, [Validators.required]],
            valorGastoPrevisto: [null, [Validators.required]]
        });

        this.modalService.onShown.subscribe(() => {});
    }

    get nomeInvalido(): boolean {
        return this.formularioEnviado && this.formulario.get('nomeRestaurante').invalid;
    }

    abrir() {
        this.modal = this.modalService.show(this.modalTemplate, {
            backdrop: "static",
            keyboard: false,
            class: "modal-lg"
        });
    }

    fechar() {
        this.modal.hide();
    }

    confirmar() {
        console.log("formulario enviado", this.restauranteDTO);
    }
}
