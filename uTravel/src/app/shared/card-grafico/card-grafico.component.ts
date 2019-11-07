import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-card-grafico',
  templateUrl: './card-grafico.component.html',
  styleUrls: ['./card-grafico.component.scss']
})
export class CardGraficoComponent implements OnInit {

    Highcharts: typeof Highcharts = Highcharts;
    chartOptions: Highcharts.Options = {
        series: [{
            data: [1, 2, 3],
            type: 'column',
            color: 'red',
            name: 'Orçamento esperado'
        },
            {
                data: [3, 2, 1],
                type: 'column',
                color: 'blue',
                name: 'Orçamento gasto'
            }],
        title: {text: 'Orçamento'}
    };
    constructor() { }

    ngOnInit() {
    }

}
