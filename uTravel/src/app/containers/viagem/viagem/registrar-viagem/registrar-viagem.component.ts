import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Viagem } from "../../../../core/modelos/dominio/viagem.model";
import { BsModalService } from "ngx-bootstrap";
import { Router } from "@angular/router";
import { ViagemDTO } from "../../../../core/modelos/dto/viagem.dto";
import { ViagemService } from "../../../../core/servicos/crud/viagem/viagem.service";

@Component({
    selector: "app-registrar-viagem",
    templateUrl: "./registrar-viagem.component.html",
    styleUrls: ["./registrar-viagem.component.scss"]
})
export class RegistrarViagemComponent implements OnInit {
    formulario: FormGroup;
    viagemDTO: ViagemDTO;

    @ViewChild("formModal", { static: false }) formModal: any;
    private formularioEnviado = false;

    constructor(
        private modalService: BsModalService,
        private formBuilder: FormBuilder,
        private router: Router,
        public viagemService: ViagemService
    ) {
        this.viagemDTO = new ViagemDTO();

        modalService.onHidden.subscribe(() => {
            this.formularioEnviado = false;
        });
    }

    ngOnInit() {
        this.formulario = this.formBuilder.group({
            titulo: [null, [Validators.required]],
            objetivo: [null, [Validators.required]],
            dataInicio: [null, [Validators.required]],
            dataFim: [null, [Validators.required]]
        });

        this.modalService.onShown.subscribe(() => {});
    }

    isCampoInvalido(campo: string): boolean {
        return this.formularioEnviado && this.formulario.get(campo).invalid;
    }

    abrirForm(): void {
        this.formModal.show();
    }

    fecharForm(): void {
        this.limparForm();
        this.formModal.hide();
    }

    limparForm(): void {
        this.formulario.get("titulo").setValue(null);
        this.formulario.get("objetivo").setValue(null);
        this.formulario.get("dataInicio").setValue(null);
        this.formulario.get("dataFim").setValue(null);
    }

    salvar(): void {
        this.formularioEnviado = true;
        if (this.formulario.status !== "INVALID") {
            this.viagemService.enviar(this.viagemDTO);
            this.viagemService.aoEnviar().subscribe(response => {
                this.fecharForm();
                this.router.navigate(["/dashboard/viagem", response.id]);
            });
        }
    }
}
