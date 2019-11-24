import { Entidade, EntidadeBuilder } from "./entidade.model";
import { Endereco } from "./endereco.model";
import { Empresa } from "./empresa.model";

export class Hospedagem extends Entidade {
    titulo: string;
    tipoHospedagem: string;

    endereco: Endereco;
    empresa: Empresa;

    constructor(
        titulo: string,
        tipoHospedagem: string,
        id?: number,
        endereco?: Endereco,
        empresa?: Empresa
    ) {
        super(id);

        this.titulo = titulo;
        this.tipoHospedagem = tipoHospedagem;

        this.endereco = endereco || null;
        this.empresa = empresa || null;
    }
}

export class HospedagemBuilder extends EntidadeBuilder<Hospedagem> {}
