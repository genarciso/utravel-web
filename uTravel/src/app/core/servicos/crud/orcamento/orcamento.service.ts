import { Injectable } from '@angular/core';
import {AbstractCrudService} from '../../../http/abstract-crud.service';
import {Orcamento} from '../../../modelos/dominio/orcamento.model';
import {HttpService} from '../../../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class OrcamentoService extends AbstractCrudService<Orcamento> {

    constructor(protected httpService: HttpService) {
        super(httpService);
    }

    getUrlBase(): string {
        return 'orcamento';
    }
}
