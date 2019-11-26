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
    private _header: object;

    constructor(private httpService: HttpService) {}

    getUrlBase(): string {
        return "restaurante";
    }

    public aoEnviar(): Observable<void> {
        return this.aoEnviarEvento.asObservable();
    }

    public enviar(restauranteDTO: RestauranteDTO): void {
        const headers = new HttpHeaders({
            // "Content-Encoding": "gzip, compress, deflate, identity, br",
            "Content-Type": "application/json; charset=UTF-8",
            Authorization:
                "Bearer " +
                localStorage.getItem(environment.chaveTokenAcessoLocalStorage)
        });

        const date1 = "11/12/2019"
        const date2 = "11/01/2020"
        const body = {
            "titulo": "viagem titulo",
            "objetivo": "viagem objetivo",
            "dataInicio": date1,
            "dataFim": date2
        };

        this.httpService
            .post("/viagem", body, HttpUtil.headers())
            .subscribe(response => {
                console.log(response);
            });

        // this.httpService.post('/viagem/1/adicionar/restaurante', restauranteDTO, this._header)
        //     .subscribe(() => {
        //         this.aoEnviarEvento.next();
        //     });
    }
}
