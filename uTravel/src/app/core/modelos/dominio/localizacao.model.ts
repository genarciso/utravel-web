import { Entidade, EntidadeBuilder } from "./entidade.model";

export class Localizacao extends Entidade {
    pais: string;
    estado: string;
    cidade: string;

    constructor(id: number, pais: string, estado: string, cidade: string) {
        super(id);
        this.pais = pais;
        this.estado = estado;
        this.cidade = cidade;
    }
}

export class LocalizacaoBuilder extends EntidadeBuilder<Localizacao> {}
