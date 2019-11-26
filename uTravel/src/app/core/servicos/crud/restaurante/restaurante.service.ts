import { Injectable } from "@angular/core";
import { AbstractCrudService } from "../../../http/abstract-crud.service";
import { Restaurante } from "../../../modelos/dominio/restaurante.model";
import { HttpService } from "../../../http/http.service";
import { HttpUtil } from "../../../util/http.util";
import RestauranteDTO from "../../../modelos/dto/restaurante.dto";
import { Subject, Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class RestauranteService {
    private aoEnviarEvento: Subject<void> = new Subject();

    constructor(private httpService: HttpService) {}

    getUrlBase(): string {
        return "restaurante";
    }

    public aoEnviar(): Observable<void> {
        return this.aoEnviarEvento.asObservable();
    }

    public enviar(restauranteDTO: RestauranteDTO, viagemId: number): void {
        this.httpService.post(`/viagem/${viagemId}/adicionar/restaurante`, restauranteDTO)
            .subscribe(() => {
                this.aoEnviarEvento.next();
            });
    }
}
