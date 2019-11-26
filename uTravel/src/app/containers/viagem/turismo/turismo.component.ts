import { Component, OnInit, TemplateRef, ViewChild, ViewChildren } from "@angular/core";
import { ListItem } from "../../../core/modelos/list-item.model";
import { DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker";
import { FormTurismo } from "./form-turismo/form-turismo.component";

declare var $: any;

@Component({
    selector: "app-turismo",
    templateUrl: "./turismo.component.html",
    styleUrls: ["./turisco.component.scss"]
})
export class TurismoComponent implements OnInit {
    @ViewChild("formTurismoModal", { static: false })
    private form: FormTurismo;

    lista_turismo: Array<ListItem>;
    valor_previsto: number;
    valor_gasto: number;

    dias_selecionados: DatepickerDateCustomClasses[];

    constructor() {
        const now = new Date();
        const twoDaysAhead = new Date();
        twoDaysAhead.setDate(now.getDate() + 2);
        const fourDaysAhead = new Date();
        fourDaysAhead.setDate(now.getDate() + 4);

        this.lista_turismo = [
            new ListItem("Camarões", "123", now),
            new ListItem("Lotus japanese fusion", "456", twoDaysAhead),
            new ListItem("Bar do suvaco", "789", fourDaysAhead)
        ];

        this.valor_previsto = 40;
        this.valor_gasto = 120;

        this.dias_selecionados = this.lista_turismo.map(Turismo => ({
            date: Turismo.date,
            classes: ["bg-warning"]
        }));
    }

    ngOnInit() {
    }

    abrirFormTurismo = () => {
        this.form.abrir();
    }
}
