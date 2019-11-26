import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Import Containers
import {DefaultLayoutComponent} from './containers';
import {PaginaInicialComponent} from './containers/pagina-inicial/pagina-inicial.component';
import {ViagemComponent} from "./containers/viagem/viagem/viagem.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicial',
        pathMatch: 'full',
    },
    {
        path: 'inicial',
        component: PaginaInicialComponent
    },
    {
        path: 'dashboard',
        component: DefaultLayoutComponent,
        data: {
            title: 'Home'
        }
    },
    {
        path: 'dashboard/viagem',
        component: ViagemComponent,
        loadChildren: () => import('./containers/viagem/viagem.module').then(m => m.ViagemModule)
    },
    { path: '**', component: DefaultLayoutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
