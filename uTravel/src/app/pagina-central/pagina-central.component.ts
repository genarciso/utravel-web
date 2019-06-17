import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {navItems} from './_nav';

@Component({
  selector: 'app-pagina-central',
  templateUrl: './pagina-central.component.html',
  styleUrls: ['./pagina-central.component.css']
})
export class PaginaCentralComponent implements OnDestroy {

    public navItems = navItems;
    public sidebarMinimized = true;
    private changes: MutationObserver;
    public element: HTMLElement;
    constructor(@Inject(DOCUMENT) _document?: any) {

        this.changes = new MutationObserver((mutations) => {
            this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
        });
        this.element = _document.body;
        this.changes.observe(<Element>this.element, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    ngOnDestroy(): void {
        this.changes.disconnect();
    }

}
