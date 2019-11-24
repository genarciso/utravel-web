import { Injectable } from '@angular/core';
import {AbstractCrudService} from '../../../http/abstract-crud.service';
import {Viagem} from '../../../modelos/dominio/viagem.model';
import {HttpService} from '../../../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class ViagemService extends AbstractCrudService<Viagem> {

    constructor(protected httpService: HttpService) {
        super(httpService);
    }

    getUrlBase(): string {
        return 'viagem';
    }

}
