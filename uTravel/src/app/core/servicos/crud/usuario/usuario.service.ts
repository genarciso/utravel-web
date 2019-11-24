import { Injectable } from '@angular/core';
import {AbstractCrudService} from '../../../http/abstract-crud.service';
import {Usuario} from '../../../modelos/dominio/usuario.model';
import {HttpService} from '../../../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends AbstractCrudService<Usuario> {

  constructor(protected httpService: HttpService) {
      super(httpService);
  }

    getUrlBase(): string {
        return 'usuario';
    }
}
