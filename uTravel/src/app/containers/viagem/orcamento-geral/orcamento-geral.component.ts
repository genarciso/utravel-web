import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-orcamento-geral',
  templateUrl: './orcamento-geral.component.html',
  styleUrls: ['./orcamento-geral.component.scss']
})
export class OrcamentoGeralComponent implements OnInit {

    valor_previsto: number = 500;
    valor_gasto: number = 678;
  constructor() { }

  ngOnInit() {
  }

}
