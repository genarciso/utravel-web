import { Component, OnInit } from "@angular/core";
import { ListItem } from "../../../core/modelos/list-item.model";

@Component({
    selector: "app-locomocao",
    templateUrl: "./locomocao.component.html",
    styleUrls: ["./locomocao.component.scss"]
})
export class LocomocaoComponent {
    lista_carros: Array<ListItem> = [
        { name: "Localiza - Renaut Kwid", id: "123" },
        { name: "Mobi - Volkswagen Up!", id: "456" },
        { name: "Localiza - Ford Ka!", id: "789" }
    ];

    valor_previsto: number = 300
    valor_gasto: number = 275;
}
