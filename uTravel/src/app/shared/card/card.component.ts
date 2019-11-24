import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from '../../core/modelos/list-item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() title: String;
    @Input() lista: Array<ListItem>;
    @Input() modal: any;
}
