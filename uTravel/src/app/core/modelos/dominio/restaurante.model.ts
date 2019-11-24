import { Entidade, EntidadeBuilder } from "./entidade.model";
import { Endereco } from "./endereco.model";
import { Empresa } from "./empresa.model";

export class Restaurante extends Entidade {
    nome: string;
    numeroEstrelas: number;
    endereco: Endereco;
    empresa: Empresa;

    constructor(
        id: number,
        nome: string,
        numeroEstrelas: number,
        endereco: Endereco,
        empresa: Empresa
    ) {
        super(id);
        this.nome = nome;
        this.numeroEstrelas = numeroEstrelas;
        this.endereco = endereco;
        this.empresa = empresa;
    }
}

export class RestauranteBuilder extends EntidadeBuilder<Restaurante> {}
