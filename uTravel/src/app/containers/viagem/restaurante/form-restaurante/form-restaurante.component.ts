import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import RestauranteDTO from "../../../../core/modelos/dto/restaurante.dto";
import { RestauranteService } from "../../../../core/servicos/crud/restaurante/restaurante.service";

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
        private formBuilder: FormBuilder,
        private restauranteService: RestauranteService
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
            valorGastoPrevisto: [null, [Validators.required]],
            endereco: [null]
        });

        this.modalService.onShown.subscribe(() => {});
    }

    get isNomeInvalido(): boolean {
        return (
            this.formularioEnviado &&
            this.formulario.get("nomeRestaurante").invalid
        );
    }

    get isDataInvalida(): boolean {
        return (
            this.formularioEnviado &&
            this.formulario.get("dataIdaPrevista").invalid
        );
    }

    get isValorGastoPrevistoInvalido(): boolean {
        return (
            this.formularioEnviado &&
            this.formulario.get("valorGastoPrevisto").invalid
        );
    }

    abrir() {
        this.modal = this.modalService.show(this.modalTemplate, {
            backdrop: "static",
            keyboard: false,
            class: "modal-lg"
        });
    }

    fechar() {
        this.limparForm();
        this.formularioEnviado = false;
        this.modal.hide();
    }

    confirmar() {
        this.formularioEnviado = true;
        if (this.formulario.status !== "INVALID") {
            this.restauranteService.enviar(this.restauranteDTO, 3);
            this.restauranteService.aoEnviar().subscribe(() => {
                this.modal.hide();
                this.limparForm();
            });
        }
    }

    limparForm() {
        this.formulario.get("nomeRestaurante").setValue(null);
        this.formulario.get("dataIdaPrevista").setValue(null);
        this.formulario.get("valorGastoPrevisto").setValue(null);
        this.formulario.get("endereco").setValue(null);
    }
}
