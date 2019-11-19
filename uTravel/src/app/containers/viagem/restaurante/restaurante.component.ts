import { Component, OnInit } from "@angular/core";
import { ListItem } from "../../../core/modelos/list-item.model";

@Component({
    selector: "app-restaurante",
    templateUrl: "./restaurante.component.html",
    styleUrls: ["./restaurante.component.scss"]
})
export class RestauranteComponent {
    lista_restaurante: Array<ListItem> = [
        { name: "Camarões", id: "123" },
        { name: "Lotus japanese fusion", id: "456" },
        { name: "Bar do suvaco", id: "789" }
    ];
    valor_previsto: number = 40;
    valor_gasto: number = 120;
}
