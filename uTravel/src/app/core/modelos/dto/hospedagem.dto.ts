import EnderecoDTO from "./endereco.dto";

enum TipoHospedagem {
    HOTEL,
    HOSTEL,
    POUSADA,
    APARTAMENTO_ALUGADO,
    CASA_ALUGADA,
    APARTAMENTO_PROPRIO,
    CASA_PROPRIA
}

class DTOInterno {
    idHospedagem: number = 0;
    titulo: string = "";
    tipoHospedagem: TipoHospedagem;
    enderecoDTO: EnderecoDTO = new EnderecoDTO();

    constructor() {}
}

export default class HospedagemDTO {
    codigo: string = '1';
    quantidadeQuartos: number = 1;
    dataHospedagem: string;
    dataSaida: string;
    valorGastoPrevisto: number;

    hospedagemDTO: DTOInterno = new DTOInterno();

    constructor() {}
}
