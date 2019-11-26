import EnderecoDTO from "./endereco.dto";

class DTOInterno {
    idPasseio: number = 0;
    nomeTurismo: string = "";
    tipoTurismo: string = "";
    enderecoDTO: EnderecoDTO = new EnderecoDTO();

    constructor() {}
}

export default class TurismoDTO {
    dataTurismo: string;
    valorGastoPrevisto: number;

    turismoDTO: DTOInterno = new DTOInterno();

    constructor() {}
}
