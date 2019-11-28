import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Viagem } from "../../../core/modelos/dominio/viagem.model";
import { ViagemService } from "../../../core/servicos/crud/viagem/viagem.service";

@Component({
    selector: "app-dashboard-viagem",
    templateUrl: "./dashboard-viagem.component.html",
    styleUrls: ["./dashboard-viagem.component.scss"]
})
export class DashboardViagemComponent implements OnInit {
    listaViagens: Viagem[] = [];

    constructor(private router: Router, private viagemService: ViagemService) {}

    ngOnInit() {
        this.viagemService.todos().subscribe(lista => {
            this.listaViagens = lista;
        });
    }

    visualizarDetalhes() {
        this.router.navigate(["/dashboard/viagem"]);
    }
}
