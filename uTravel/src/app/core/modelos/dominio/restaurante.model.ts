import { Entidade, EntidadeBuilder } from "./entidade.model";
import { Endereco } from "./endereco.model";
import { Empresa } from "./empresa.model";

export class Restaurante extends Entidade {
    nome: string;
    numeroEstrelas: number;
    endereco: Endereco;
    empresa: Empresa;

    constructor(
        nome: string,
        numeroEstrelas: number,
        id?: number,
        endereco?: Endereco,
        empresa?: Empresa
    ) {
        super(id);
        this.nome = nome;
        this.numeroEstrelas = numeroEstrelas;
        this.endereco = endereco || null;
        this.empresa = empresa || null;
    }
}

export class RestauranteBuilder extends EntidadeBuilder<Restaurante> {}
