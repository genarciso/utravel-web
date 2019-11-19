import { Component, OnInit } from "@angular/core";
import { ListItem } from "../../../core/modelos/list-item.model";

@Component({
    selector: "app-turismo",
    templateUrl: "./turismo.component.html",
    styleUrls: ["./turismo.component.scss"]
})
export class TurismoComponent {
    titulo_card: String = "Passeios turísticos";

    lista_turismo: Array<ListItem> = [
        new ListItem("Passeio de Buggy", "123"),
        new ListItem("Visita aos corais", "456"),
        new ListItem("Show do Grafitão", "789"),
        new ListItem("Visita gratuita ao Walfredo Gurgel", "012")
    ];

    valor_previsto: number = 566;
    valor_gasto: number = 200;
}
