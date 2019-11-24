import {Entidade, EntidadeBuilder} from './entidade.model';
import { Localizacao } from './localizacao.model';

export class Endereco extends Entidade {
    endereco: string;
    localizacao: Localizacao;

    constructor(id: number, endereco: string, localizacao: Localizacao) {
        super(id);
        this.endereco = endereco;

        this.localizacao = localizacao;
    }
}

export class EnderecoBuilder extends EntidadeBuilder<Endereco> {

}
