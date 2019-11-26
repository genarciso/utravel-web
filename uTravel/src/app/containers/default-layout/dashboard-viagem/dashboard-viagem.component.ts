import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-dashboard-viagem',
    templateUrl: './dashboard-viagem.component.html',
    styleUrls: ['./dashboard-viagem.component.scss']
})
export class DashboardViagemComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    visualizarDetalhes() {
        this.router.navigate(['/dashboard/viagem']);
    }

}
