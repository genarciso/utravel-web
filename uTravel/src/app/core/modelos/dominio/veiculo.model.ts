import { Entidade, EntidadeBuilder } from "./entidade.model";

enum TipoTransporte {
    BICICLETA,
    CARRO,
    MOTO,
    CAMINHAO,
    VAN,
    ONIBUS,
    AVIAO,
    HELICOPTERO
}
export class Veiculo extends Entidade {
    placa: string;
    cor: string;
    modelo: string;
    marca: string;
    tipoTransporte: TipoTransporte;

    constructor(
        id: number,
        placa: string,
        cor: string,
        modelo: string,
        marca: string,
        tipoTransporte: TipoTransporte,
    ) {
        super(id);

        this.placa = placa;
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
        this.tipoTransporte = tipoTransporte;
    }
}

export class VeiculoBuilder extends EntidadeBuilder<Veiculo> {}
