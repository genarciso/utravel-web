import { Injectable } from '@angular/core';
import {AbstractCrudService} from '../../../http/abstract-crud.service';
import {Endereco} from '../../../modelos/dominio/endereco.model';
import {HttpService} from '../../../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class EnderecoService extends AbstractCrudService<Endereco> {
    constructor(protected httpService: HttpService) {
        super(httpService);
    }

    getUrlBase(): string {
        return 'endereco';
    }

}
