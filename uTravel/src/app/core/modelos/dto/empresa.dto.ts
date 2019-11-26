import EnderecoDTO from './endereco.dto';

export default class EmpresaDTO {
    idEmpresa: number = 0;
    nome: string = 'empresa teste';
    documento: string = '123456';
    enderecoSede: EnderecoDTO = new EnderecoDTO();

}
