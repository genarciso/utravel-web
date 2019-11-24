import {Entidade, EntidadeBuilder} from './entidade.model';
import { Veiculo } from './veiculo.model';
import { Empresa } from './empresa.model';

export class VeiculoAlugado extends Entidade {
    empresaLocadora: Empresa;
    veiculo: Veiculo;

    constructor(empresaLocadora: Empresa, veiculo: Veiculo, id?: number) {
        super(id);

        this.empresaLocadora = empresaLocadora;
        this.veiculo = veiculo;
    }
}

export class VeiculoAlugadoBuilder extends EntidadeBuilder<VeiculoAlugado> {

}
