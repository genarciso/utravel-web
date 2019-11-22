import { Component, OnInit } from "@angular/core";
import { ListItem } from "../../../core/modelos/list-item.model";

@Component({
    selector: "app-hospedagem",
    templateUrl: "./hospedagem.component.html",
    styleUrls: ["./hospedagem.component.scss"]
})
export class HospedagemComponent {
    lista_hoteis: Array<ListItem> = [
        new ListItem("Hotel Barreira Roxa", "123"),
        new ListItem("Ponta Negra Beach", "456"),
        new ListItem("Piramide Hotel", "789")
    ];

    valor_previsto: number = 500;
    valor_gasto: number = 678;

    bsInlineValue = new Date();
    bsInlineRangeValue: Date[];
    maxDate = new Date();

    constructor() {
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
    }
}
