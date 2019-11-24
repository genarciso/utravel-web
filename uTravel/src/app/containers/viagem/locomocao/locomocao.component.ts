import { Component, OnInit } from "@angular/core";
import { ListItem } from "../../../core/modelos/list-item.model";
import { DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker";

@Component({
    selector: "app-locomocao",
    templateUrl: "./locomocao.component.html",
    styleUrls: ["./locomocao.component.scss"]
})
export class LocomocaoComponent {
    lista_carros: Array<ListItem>;

    valor_previsto: number;
    valor_gasto: number;

    dias_selecionados: DatepickerDateCustomClasses[];

    constructor() {
        const now = new Date();
        const twoDaysAhead = new Date();
        twoDaysAhead.setDate(now.getDate() + 1);
        const fourDaysAhead = new Date();
        fourDaysAhead.setDate(now.getDate() + 2);

        this.lista_carros = [
            new ListItem("Localiza - Renaut Kwid", "123", now),
            new ListItem("Mobi - Volkswagen Up!", "456", twoDaysAhead),
            new ListItem("Localiza - Ford Ka!", "789", fourDaysAhead)
        ];

        this.valor_gasto = 275;
        this.valor_previsto = 300;

        this.dias_selecionados = this.lista_carros.map(restaurante => ({
            date: restaurante.date,
            classes: ["bg-warning"]
        }));
    }
}

