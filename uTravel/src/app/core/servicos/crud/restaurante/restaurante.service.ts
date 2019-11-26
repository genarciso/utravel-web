import { Injectable } from "@angular/core";
import { AbstractCrudService } from "../../../http/abstract-crud.service";
import { Restaurante } from "../../../modelos/dominio/restaurante.model";
import { HttpService } from "../../../http/http.service";
import { HttpUtil } from "../../../util/http.util";
import RestauranteDTO from "../../../modelos/dto/restaurante.dto";
import { Subject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class RestauranteService {
    private aoEnviarEvento: Subject<void> = new Subject();
    private _header: object;

    constructor(private httpService: HttpService) {}

    getUrlBase(): string {
        return "restaurante";
    }

    public aoEnviar(): Observable<void> {
        return this.aoEnviarEvento.asObservable();
    }

    public enviar(restauranteDTO: RestauranteDTO): void {
        this._header = {
            headers: HttpUtil.httpHeaders(),
            type: "text"
        };

        const parametros = JSON.stringify({
            titulo: "viagem titulo",
            objetivo: "viagem objetivo",
            dataInicio: `${Date.now()}`,
            dataFim: `${Date.now() + 1}`
        });

        this.httpService.post("/viagem", parametros, this._header).subscribe(response => {
            console.log(response);
        });

        // this.httpService.post('/viagem/1/adicionar/restaurante', restauranteDTO, this._header)
        //     .subscribe(() => {
        //         this.aoEnviarEvento.next();
        //     });
    }
}
