import { Injectable } from '@angular/core';
import {AbstractCrudService} from '../../../http/abstract-crud.service';
import {VeiculoAlugado} from '../../../modelos/dominio/veiculoAlugado.model';
import {HttpService} from '../../../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class VeiculoAlugadoService extends AbstractCrudService<VeiculoAlugado> {

    constructor(protected httpService: HttpService) {
        super(httpService);
    }

    getUrlBase(): string {
        return 'veiculo-alugado';
    }
}
