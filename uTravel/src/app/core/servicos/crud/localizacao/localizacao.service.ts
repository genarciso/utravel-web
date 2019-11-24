import { Injectable } from '@angular/core';
import {AbstractCrudService} from '../../../http/abstract-crud.service';
import {Localizacao} from '../../../modelos/dominio/localizacao.model';
import {HttpService} from '../../../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class LocalizacaoService extends AbstractCrudService<Localizacao> {

    constructor(protected httpService: HttpService) {
        super(httpService);
    }

    getUrlBase(): string {
        return 'localizacao';
    }
}
