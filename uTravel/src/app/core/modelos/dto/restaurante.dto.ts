import EnderecoDTO from './endereco.dto';
import EmpresaDTO from './empresa.dto';

class DTOInterno {
    idRestaurante: number = 0;
    nomeRestaurante: string = '';
    enderecoDTO: EnderecoDTO = new EnderecoDTO();
    empresaDTO: EmpresaDTO = new EmpresaDTO();

    constructor() {}
}

export class RestauranteDTO {
    dataIdaPrevista: string;
    valorGastoPrevisto: number;

    restauranteDTO: DTOInterno = new DTOInterno();
}
