import {Injectable} from '@angular/core';
import {Passeio} from '../../../modelos/dominio/passeio.model';
import {AbstractCrudService} from '../../../http/abstract-crud.service';
import {HttpService} from '../../../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class PasseioService extends AbstractCrudService<Passeio> {

    constructor(protected httpSerice: HttpService) {
        super(httpSerice);
    }

    getUrlBase(): string {
        return 'passeio';
    }
}
