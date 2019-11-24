import {Entidade, EntidadeBuilder} from './entidade.model';
import { Localizacao } from './localizacao.model';

export class Endereco extends Entidade {
    endereco: string;
    localizacao: Localizacao;

    constructor(endereco: string, localizacao?: Localizacao, id?: number) {
        super(id);
        this.endereco = endereco;

        this.localizacao = localizacao || null;
    }
}

export class EnderecoBuilder extends EntidadeBuilder<Endereco> {

}
