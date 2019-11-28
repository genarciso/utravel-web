import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ViagemComponent } from "./viagem/viagem.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: "/:id",
                component: ViagemComponent,
                data: { title: "Viagem" }
            }
        ])
    ],
    exports: [RouterModule]
})
export class ViagemRoutingModule {}
