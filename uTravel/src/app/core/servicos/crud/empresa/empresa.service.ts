import { Injectable } from '@angular/core';
import {AbstractCrudService} from '../../../http/abstract-crud.service';
import {Empresa} from '../../../modelos/dominio/empresa.model';
import {HttpService} from '../../../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService extends AbstractCrudService<Empresa> {

  constructor(protected httpService: HttpService) {
      super(httpService);
  }

    getUrlBase(): string {
        return 'empresa';
    }

}
