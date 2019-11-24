import {Entidade, EntidadeBuilder} from './entidade.model';

export class Viagem extends Entidade {
    titulo: string;
    objetivo: string;
    dataInicio: Date;
    dataFim: Date;

    constructor(titulo: string, objetivo: string, dataInicio: Date, dataFim: Date, id?: number) {
        super(id);

        this.titulo = titulo;
        this.objetivo = objetivo;

        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }
}

export class ViagemBuilder extends EntidadeBuilder<Viagem> {

}
