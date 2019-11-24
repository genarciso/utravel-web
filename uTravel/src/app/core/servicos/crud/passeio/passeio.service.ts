import { Injectable } from '@angular/core';
import {AbstractCrudService} from '../../abstract-crud.service';

@Injectable({
  providedIn: 'root'
})
export class PasseioService extends AbstractCrudService<Passeio> {

  constructor() { }
}
