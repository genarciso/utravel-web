import {Component, OnDestroy, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';


@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html',
    styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnDestroy {
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
