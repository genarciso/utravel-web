import { Entidade, EntidadeBuilder } from "./entidade.model";
import { Endereco } from "./endereco.model";
import { Empresa } from "./empresa.model";

enum TipoHospedagem {
    HOTEL,
    HOSTEL,
    POUSADA,
    APARTAMENTO_ALUGADO,
    CASA_ALUGADA,
    APARTAMENTO_PROPRIO,
    CASA_PROPRIA
}

export class Hospedagem extends Entidade {
    titulo: string;
    tipoHospedagem: TipoHospedagem;

    endereco: Endereco;
    empresa: Empresa;

    constructor(
        titulo: string,
        tipoHospedagem: TipoHospedagem,
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
