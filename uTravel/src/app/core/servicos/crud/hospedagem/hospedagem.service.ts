import { Injectable } from '@angular/core';
import {AbstractCrudService} from '../../../http/abstract-crud.service';
import {Hospedagem} from '../../../modelos/dominio/hospedagem.model';
import {HttpService} from '../../../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class HospedagemService extends AbstractCrudService<Hospedagem> {

    constructor(protected httpService: HttpService) {
        super(httpService);
    }

    getUrlBase(): string {
        return 'hospedagem';
    }
}
