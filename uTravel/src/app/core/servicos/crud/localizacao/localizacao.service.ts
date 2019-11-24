import { Injectable } from '@angular/core';
import {AbstractCrudService} from '../../../http/abstract-crud.service';

@Injectable({
  providedIn: 'root'
})
export class LocalizacaoService extends AbstractCrudService<Localizacao> {

  constructor() { }
}
