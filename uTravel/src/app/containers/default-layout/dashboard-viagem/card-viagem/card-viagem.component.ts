import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-viagem',
  templateUrl: './card-viagem.component.html',
  styleUrls: ['./card-viagem.component.scss']
})
export class CardViagemComponent implements OnInit {

    @Input() status: string = 'Iniciada';

    @Input() id: string;
    @Input() objetivo: string;
    @Input() titulo: string;

    @Input() origem: string;
    @Input() destino: string;
    @Input() dataInicio: string;
    @Input() dataFim: string;
    @Input() orcamentoPrevisto: string;

    @Input() resumo: string;

    dataInicioFormatada: string;
    dataFimFormatada: string;

    constructor(private router: Router) { }

    ngOnInit() {
        this.dataInicioFormatada = new Date(this.dataInicio).toLocaleDateString();
        this.dataFimFormatada = new Date(this.dataFim).toLocaleDateString();
    }

    getStatusViagemBorder(): string {
        if (status.toLowerCase() === 'concluida')
            return 'border-success';

        if (status.toLowerCase() === 'em andamento')
            return 'border-warning';

        return 'border-primary';
    }

    irParaEditar(): void {
        this.router.navigate(["/dashboard/viagem", this.id]);
    }
}
