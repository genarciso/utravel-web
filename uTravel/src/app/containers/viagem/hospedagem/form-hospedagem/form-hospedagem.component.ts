import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import HospedagemDTO from "../../../../core/modelos/dto/hospedagem.dto";
import { HospedagemService } from "../../../../core/servicos/crud/hospedagem/hospedagem.service";

@Component({
    selector: "app-form-hospedagem",
    templateUrl: "./form-hospedagem.component.html",
    styleUrls: ["./form-hospedagem.component.scss"]
})
export class FormHospedagemComponent implements OnInit {
    @ViewChild("formHospedagemTemplate", { static: false })
    modalTemplate: TemplateRef<any>;

    modal: BsModalRef;
    formulario: FormGroup;
    formularioEnviado = false;

    hospedagemDTO: HospedagemDTO = new HospedagemDTO();

    constructor(
        private modalService: BsModalService,
        private formBuilder: FormBuilder,
        private hospedagemService: HospedagemService
    ) {
        modalService.onHidden.subscribe(() => {
            this.formularioEnviado = false;
        });
    }

    ngOnInit() {
        this.formulario = this.formBuilder.group({
            nomeHospedagem: [null, [Validators.required]],
            tipoHospedagem: [null, [Validators.required]],
            dataHospedagem: [null, [Validators.required]],
            dataSaidaPrevista: [null, [Validators.required]],
            quantidadeQuartos: [null, [Validators.required]],
            valorGastoPrevisto: [null, [Validators.required]],
            endereco: [null, [Validators.required]]
        });

        this.modalService.onShown.subscribe(() => {});
    }

    get isNomeInvalido(): boolean {
        return (
            this.formularioEnviado &&
            this.formulario.get("nomeHospedagem").invalid
        );
    }
    get isTipoHospedagem(): boolean {
        return (
            this.formularioEnviado &&
            this.formulario.get("tipoHospedagem").invalid
        );
    }
    get isDataInvalida(): boolean {
        return (
            this.formularioEnviado &&
            this.formulario.get("dataHospedagem").invalid
        );
    }
    get isDataSaidaInvalida(): boolean {
        return (
            this.formularioEnviado &&
            this.formulario.get("dataSaidaPrevista").invalid
        );
    }
    get isQuantidadeQuartosInvalido(): boolean {
        return (
            this.formularioEnviado &&
            this.formulario.get("quantidadeQuartos").invalid
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
            this.hospedagemService.enviar(this.hospedagemDTO, 3);
            this.hospedagemService.aoEnviar().subscribe(() => {
                this.modal.hide();
                this.limparForm();
            });
        }
    }

    limparForm() {
        this.formulario.get("nomeHospedagem").setValue(null);
        this.formulario.get("tipoHospedagem").setValue(null);
        this.formulario.get("dataHospedagem").setValue(null);
        this.formulario.get("dataSaidaPrevista").setValue(null);
        this.formulario.get("quantidadeQuartos").setValue(null);
        this.formulario.get("valorGastoPrevisto").setValue(null);
    }
}
