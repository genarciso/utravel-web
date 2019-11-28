import { Injectable } from "@angular/core";
import { AbstractCrudService } from "../../../http/abstract-crud.service";
import { Viagem } from "../../../modelos/dominio/viagem.model";
import { HttpService } from "../../../http/http.service";
import { ViagemDTO } from "../../../modelos/dto/viagem.dto";
import { Subject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ViagemService extends AbstractCrudService<Viagem> {
    private aoEnviarEvento: Subject<Viagem> = new Subject();

    constructor(protected httpService: HttpService) {
        super(httpService);
    }

    public aoEnviar(): Observable<Viagem> {
        return this.aoEnviarEvento.asObservable();
    }

    getUrlBase(): string {
        return "/viagem";
    }

    public enviar(viagemDTO: ViagemDTO): void {
        const parametros = JSON.stringify(viagemDTO);

        this.httpService.post("/viagem", parametros).subscribe(response => {
            this.aoEnviarEvento.next(response);
        });
    }
}
