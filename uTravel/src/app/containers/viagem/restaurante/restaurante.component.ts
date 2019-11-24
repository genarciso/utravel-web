import { Component, OnInit } from "@angular/core";
import { ListItem } from "../../../core/modelos/list-item.model";
import { DatepickerDateCustomClasses } from "ngx-bootstrap/datepicker";

@Component({
    selector: "app-restaurante",
    templateUrl: "./restaurante.component.html",
    styleUrls: ["./restaurante.component.scss"]
})
export class RestauranteComponent {
    lista_restaurante: Array<ListItem>;
    valor_previsto: number;
    valor_gasto: number;

    dias_selecionados: DatepickerDateCustomClasses[];

    constructor() {
        const now = new Date();
        const twoDaysAhead = new Date();
        twoDaysAhead.setDate(now.getDate() + 2);
        const fourDaysAhead = new Date();
        fourDaysAhead.setDate(now.getDate() + 4);

        this.lista_restaurante = [
            new ListItem("Camarões", "123", now),
            new ListItem("Lotus japanese fusion", "456", twoDaysAhead),
            new ListItem("Bar do suvaco", "789", fourDaysAhead)
        ];

        this.valor_previsto = 40;
        this.valor_gasto = 120;

        this.dias_selecionados = this.lista_restaurante.map(restaurante => ({
            date: restaurante.date,
            classes: ["bg-warning"]
        }));
    }
}
