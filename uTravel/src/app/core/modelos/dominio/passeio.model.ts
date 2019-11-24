import {Entidade, EntidadeBuilder} from './entidade.model';
import { Endereco } from './endereco.model';

export class Passeio extends Entidade {
    nome: string;
    tipo: string;

    endereco: Endereco;

    constructor(id: number, nome: string, tipo: string, endereco: Endereco) {
        super(id)

        this.nome = nome;
        this.tipo = tipo;

        this.endereco = endereco;
    }
}

export class PasseioBuilder extends EntidadeBuilder<Passeio> {

}
