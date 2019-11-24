import {Entidade, EntidadeBuilder} from './entidade.model';
import { Endereco } from './endereco.model';

export class Passeio extends Entidade {
    nome: string;
    tipo: string;

    endereco: Endereco;

    constructor(nome: string, tipo: string, id?: number, endereco?: Endereco) {
        super(id)

        this.nome = nome;
        this.tipo = tipo;

        this.endereco = endereco || null;
    }
}

export class PasseioBuilder extends EntidadeBuilder<Passeio> {

}
