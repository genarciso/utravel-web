import EnderecoDTO from "./endereco.dto";

class DTOInterno {
    idRestaurante: number = 0;
    nomeRestaurante: string = "";
    enderecoDTO: EnderecoDTO = new EnderecoDTO();

    constructor() {}
}

export default class RestauranteDTO {
    dataIdaPrevista: string;
    valorGastoPrevisto: number;

    restauranteDTO: DTOInterno = new DTOInterno();

    constructor() {}
}
