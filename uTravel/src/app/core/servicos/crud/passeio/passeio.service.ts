import { Injectable } from "@angular/core";
import { AbstractCrudService } from "../../../http/abstract-crud.service";
import { HttpService } from "../../../http/http.service";
import { HttpUtil } from "../../../util/http.util";
import TurismoDTO from "../../../modelos/dto/passeio.dto";
import { Subject, Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class TurismoService {
    private aoEnviarEvento: Subject<void> = new Subject();

    constructor(private httpService: HttpService) {}

    getUrlBase(): string {
        return "passeio";
    }

    public aoEnviar(): Observable<void> {
        return this.aoEnviarEvento.asObservable();
    }

    public enviar(turismoDTO: TurismoDTO, viagemId: number): void {
        this.httpService.post(`/viagem/${viagemId}/adicionar/passeio`, turismoDTO)
            .subscribe(() => {
                this.aoEnviarEvento.next();
            });
    }
}
