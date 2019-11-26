import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import TurismoDTO from "../../../../core/modelos/dto/passeio.dto";
import { TurismoService } from "../../../../core/servicos/crud/passeio/passeio.service";

@Component({
    selector: "form-turismo",
    templateUrl: "./form-turismo.component.html",
    styleUrls: ["./form-turismo.component.scss"]
})
export class FormTurismoComponent implements OnInit {
    @ViewChild("formTurismoTemplate", { static: false })
    modalTemplate: TemplateRef<any>;

    modal: BsModalRef;
    formulario: FormGroup;
    formularioEnviado = false;

    turismoDTO: TurismoDTO;

    constructor(
        private modalService: BsModalService,
        private formBuilder: FormBuilder,
        private turismoService: TurismoService
    ) {
        this.turismoDTO = new TurismoDTO();

        modalService.onHidden.subscribe(() => {
            this.formularioEnviado = false;
        });
    }

    ngOnInit() {
        this.formulario = this.formBuilder.group({
            dataTurismo: [null, [Validators.required]],
            nomeTurismo: [null, [Validators.required]],
            tipoTurismo: [null, [Validators.required]],
            valorGastoPrevisto: [null, [Validators.required]],
            endereco: [null]
        });

        this.modalService.onShown.subscribe(() => {});
    }

    get isNomeInvalido(): boolean {
        return (
            this.formularioEnviado &&
            this.formulario.get("nomeTurismo").invalid
        );
    }

    get isDataInvalida(): boolean {
        return (
            this.formularioEnviado &&
            this.formulario.get("dataTurismo").invalid
        );
    }

    get isValorGastoPrevistoInvalido(): boolean {
        return (
            this.formularioEnviado &&
            this.formulario.get("valorGastoPrevisto").invalid
        );
    }

    get isTipoInvalido(): boolean {
      return (
          this.formularioEnviado &&
          this.formulario.get("tipoTurismo").invalid
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
            this.turismoService.enviar(this.turismoDTO, 3);
            this.turismoService.aoEnviar().subscribe(() => {
                this.modal.hide();
                this.limparForm();
            });
        }
    }

    limparForm() {
        this.formulario.get("nomeTurismo").setValue(null);
        this.formulario.get("dataTurismo").setValue(null);
        this.formulario.get("tipoTurismo").setValue(null);
        this.formulario.get("valorGastoPrevisto").setValue(null);
        this.formulario.get("endereco").setValue(null);
    }
}
