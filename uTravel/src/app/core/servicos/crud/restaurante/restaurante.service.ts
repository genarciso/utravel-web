import {Injectable} from '@angular/core';
import {HttpService} from '../../../http/http.service';
import {RestauranteDTO} from '../../../modelos/dto/restaurante.dto';
import {Observable, Subject} from 'rxjs';
import {AbstractCrudService} from '../../../http/abstract-crud.service';
import {Restaurante} from '../../../modelos/dominio/restaurante.model';

@Injectable({
    providedIn: 'root'
})
export class RestauranteService extends AbstractCrudService<Restaurante> {
    private aoEnviarEvento: Subject<void> = new Subject();

    constructor(protected httpService: HttpService) {
        super(httpService);
    }

    getUrlBase(): string {
        return 'restaurante';
    }

    public aoEnviar(): Observable<void> {
        return this.aoEnviarEvento.asObservable();
    }

    public enviar(restauranteDTO: RestauranteDTO, viagemId: number): void {
        restauranteDTO.restauranteDTO.empresaDTO.enderecoSede.endereco = restauranteDTO.restauranteDTO.enderecoDTO.endereco;
        const parametros = JSON.stringify(restauranteDTO);
        console.log(parametros);
        this.httpService.post(`/viagem/${viagemId}/adicionar/restaurante`, parametros)
            .subscribe(() => {
                this.aoEnviarEvento.next();
            });
    }
}
