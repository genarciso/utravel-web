import { Entidade, EntidadeBuilder } from "./entidade.model";
import { Hospedagem } from "./hospedagem.model";

export class Reserva extends Entidade {
    codigo: string;
    quantidadeQuartos: number;
    hospedagem: Hospedagem;

    constructor(
        id: number,
        codigo: string,
        quantidadeQuartos: number,
        hospedagem: Hospedagem
    ) {
        super(id);
        this.codigo = codigo;
        this.quantidadeQuartos = quantidadeQuartos;
        this.hospedagem = hospedagem;
    }
}

export class ReservaBuilder extends EntidadeBuilder<Reserva> {}
