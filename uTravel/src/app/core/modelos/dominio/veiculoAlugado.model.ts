import {Entidade, EntidadeBuilder} from './entidade.model';
import { Veiculo } from './veiculo.model';
import { Empresa } from './empresa.model';

export class VeiculoAlugado extends Entidade {
    empresaLocadora: Empresa;
    veiculo: Veiculo;

    constructor(id: number, empresaLocadora: Empresa, veiculo: Veiculo) {
        super(id);

        this.empresaLocadora = empresaLocadora;
        this.veiculo = veiculo;
    }
}

export class VeiculoAlugadoBuilder extends EntidadeBuilder<VeiculoAlugado> {

}
