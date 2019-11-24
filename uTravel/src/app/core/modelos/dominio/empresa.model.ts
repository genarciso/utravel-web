import {Entidade, EntidadeBuilder} from './entidade.model';
import { Endereco } from './endereco.model';

export class Empresa extends Entidade {
    nome: string;
    documento: string;
    endereco: Endereco;

    constructor(id: number, nome: string, documento: string, endereco: Endereco) {
        super(id);

        this.nome = nome;
        this.documento = documento;

        this.endereco = endereco;
    }
}

export class EmpresaBuilder extends EntidadeBuilder<Empresa> {

}
