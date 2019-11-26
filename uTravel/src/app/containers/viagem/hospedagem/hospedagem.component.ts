import { Component, OnInit, ViewChild } from "@angular/core";
import { ListItem } from "../../../core/modelos/list-item.model";
import { DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker/models";
import { FormHospedagemComponent } from "./form-hospedagem/form-hospedagem.component";

@Component({
    selector: "app-hospedagem",
    templateUrl: "./hospedagem.component.html",
    styleUrls: ["./hospedagem.component.scss"]
})
export class HospedagemComponent {
    @ViewChild("formHospedagemModal", { static: false })
    private form: FormHospedagemComponent;

    lista_hoteis: Array<ListItem>;

    valor_previsto: number;
    valor_gasto: number;

    dias_selecionados: DatepickerDateCustomClasses[];

    constructor() {
        const now = new Date();
        const twoDaysAhead = new Date();
        twoDaysAhead.setDate(now.getDate() + 3);
        const fourDaysAhead = new Date();
        fourDaysAhead.setDate(now.getDate() + 5);

        this.lista_hoteis = [
            new ListItem("Hotel Barreira Roxa", "123", now),
            new ListItem("Ponta Negra Beach", "456", twoDaysAhead),
            new ListItem("Piramide Hotel", "789", fourDaysAhead)
        ];

        this.valor_previsto = 500;
        this.valor_gasto = 700;

        this.dias_selecionados = this.lista_hoteis.map(restaurante => ({
            date: restaurante.date,
            classes: ["bg-warning"]
        }));
    }

    abrirFormHospedagem = () => {
        this.form.abrir();
    };
}
