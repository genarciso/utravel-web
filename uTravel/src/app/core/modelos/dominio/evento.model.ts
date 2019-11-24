import { Entidade, EntidadeBuilder } from "./entidade.model";
import { Viagem } from './viagem.model';
import { Restaurante } from './restaurante.model';
import { Passeio } from './passeio.model';
import { VeiculoAlugado } from './veiculoAlugado.model';

export class Evento extends Entidade {
    titulo: string;
    valorEstimado: number;
    valorTotalGasto: number;
    dataInicio: Date;
    dataFim: Date;

    viagem: Viagem;
    restaurante: Restaurante;
    reserva: Reserva;
    passeio: Passeio;
    veiculoAlugado: VeiculoAlugado;
    passagem: Passagem;

    constructor(
        titulo: string,
        valorEstimado: number,
        valorTotalGasto: number,
        dataInicio: Date,
        dataFim: Date,
        viagem: Viagem,
        restaurante: Restaurante,
        reserva: Reserva,
        passeio: Passeio,
        veiculoAlugado: VeiculoAlugado,
        passagem: Passagem,
        id?: number,
    ) {
        super(id);

        this.titulo = titulo;
        this.valorEstimado = valorEstimado;
        this.valorTotalGasto = valorTotalGasto;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.viagem = viagem;
        this.restaurante = restaurante;
        this.reserva = reserva;
        this.passeio = passeio;
        this.veiculoAlugado = veiculoAlugado;
        this.passagem = passagem;
    }
}

export class EventoBuilder extends EntidadeBuilder<Evento> {}
