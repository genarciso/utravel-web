import { EntidadeBuilder, Entidade } from "./entidade.model";
import { Endereco } from "./endereco.model";
import { Empresa } from "./empresa.model";

export class Passagem extends Entidade {
    dataPartida: Date; //
    empresa: Empresa; //
    enderecoChegadaDestino: Endereco; //
    enderecoSaidaOrigem: Endereco; //

    dataChegada: Date;
    enderecoParadas: Endereco[];

    constructor(
        id: number,
        dataPartida: Date,
        empresa: Empresa,
        enderecoChegadaDestino: Endereco,
        enderecoSaidaOrigem: Endereco,
        dataChegada?: Date,
        enderecoParadas?: Endereco[],
    ) {
        super(id);

        this.dataPartida = dataPartida;
        this.empresa = empresa;
        this.enderecoChegadaDestino = enderecoChegadaDestino;
        this.enderecoSaidaOrigem = enderecoSaidaOrigem;
        this.dataChegada = dataChegada || null;
        this.enderecoParadas = enderecoParadas || null;
    }
}

export class PassagemBuilder extends EntidadeBuilder<Passagem> {}
