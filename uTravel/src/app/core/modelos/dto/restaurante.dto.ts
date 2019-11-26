import EnderecoDTO from './endereco.dto';

export default class RestauranteDTO {
    name: string;
    dataIdaPrevista: Date;
    valorGastoPrevisto: number;
    endereco: EnderecoDTO = new EnderecoDTO();

    constructor() {}
}
