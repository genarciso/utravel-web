import { Component, OnInit, Input } from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
    selector: "app-card-grafico",
    templateUrl: "./card-grafico.component.html",
    styleUrls: ["./card-grafico.component.scss"]
})
export class CardGraficoComponent implements OnInit {
    @Input() previsto: number = 0;
    @Input() gasto: number = 0;

    Highcharts: typeof Highcharts = Highcharts;
    chartOptions: Highcharts.Options = {}

    constructor() {}

    ngOnInit() {
        this.chartOptions = {
            series: [
                {
                    data: [this.previsto],
                    type: "column",
                    color: "red",
                    name: "Orçamento esperado"
                },
                {
                    data: [this.gasto],
                    type: "column",
                    color: "blue",
                    name: "Orçamento gasto"
                }
            ],
            title: { text: "Orçamento" }
        };

    }
}
