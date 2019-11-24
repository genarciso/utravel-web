import {Entidade, EntidadeBuilder} from './entidade.model';
import { Endereco } from './endereco.model';

export class Empresa extends Entidade {
    nome: string;
    documento: string;
    endereco: Endereco;

    constructor(nome: string, documento: string, id?: number, endereco?: Endereco) {
        super(id);

        this.nome = nome;
        this.documento = documento;

        this.endereco = endereco || null;
    }
}

export class EmpresaBuilder extends EntidadeBuilder<Empresa> {

}
