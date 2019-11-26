import { Entidade, EntidadeBuilder } from './entidade.model';

export class Viagem extends Entidade {
    titulo: string;
    objetivo: string;
    dataInicio: Date;
    dataFim: Date;
}

export class ViagemBuilder extends EntidadeBuilder<Viagem> {
    private titulo: string;
    private objetivo: string;
    private dataInicio: Date;
    private dataFim: Date;

    comTitulo(valor: string): ViagemBuilder {
        this.titulo = valor;
        return this;
    }

    comObjetivo(valor: string): ViagemBuilder {
        this.objetivo = valor;
        return this;
    }

    comDataInicio(valor: Date): ViagemBuilder {
        this.dataInicio = valor;
        return this;
    }

    comDataFim(valor: Date): ViagemBuilder {
        this.dataFim = valor;
        return this;
    }

    construir(): Viagem {
        const instancia = super.construir(Viagem);
        instancia.titulo = this.titulo;
        instancia.objetivo = this.objetivo;
        instancia.dataInicio = this.dataInicio;
        instancia.dataFim = this.dataFim;

        return instancia;
    }

}
