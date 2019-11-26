import { Injectable } from "@angular/core";
import { AbstractCrudService } from "../../../http/abstract-crud.service";
import { Hospedagem } from "../../../modelos/dominio/hospedagem.model";
import { HttpService } from "../../../http/http.service";
import { Subject, Observable } from "rxjs";
import HospedagemDTO from "../../../modelos/dto/hospedagem.dto";

@Injectable({
    providedIn: "root"
})
export class HospedagemService {
    private aoEnviarEvento: Subject<void> = new Subject();

    constructor(private httpService: HttpService) {}

    getUrlBase(): string {
        return "hospedagem";
    }

    public aoEnviar(): Observable<void> {
        return this.aoEnviarEvento.asObservable();
    }

    public enviar(hospedagemDTO: HospedagemDTO, viagemId: number): void {
        this.httpService
            .post(
                `/viagem/${viagemId}/adicionar/reserva/hospedagem`,
                hospedagemDTO
            )
            .subscribe(() => {
                this.aoEnviarEvento.next();
            });
    }
}
