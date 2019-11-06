import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {CardGraficoComponent} from './card-grafico/card-grafico.component';
import {HighchartsChartModule} from 'highcharts-angular';

@NgModule({
    declarations: [
        CardComponent,
        CardGraficoComponent
    ],
    imports: [
        CommonModule,
        HighchartsChartModule
    ],
    exports: [
        CardComponent,
        CardGraficoComponent
    ]
})
export class SharedModule { }
