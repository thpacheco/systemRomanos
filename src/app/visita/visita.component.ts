import { Component, OnInit } from '@angular/core';
import { VisitaService } from 'app/services/visita.service';
import { Visita } from 'app/models/visita.model';

declare var $: any;

@Component({
    selector: 'visita-cmp',
    templateUrl: 'visita.component.html',
    providers: [VisitaService]

})

export class VisitaComponent implements OnInit {
    visitas: Visita[];
    receitaCollum: string[];

    constructor(private _visitaService: VisitaService) {
    }

    ngOnInit() {
        this.CarregarVisitas();
        this.PopularTableReceita();
    }
    PopularTableReceita(): void {
        this.receitaCollum = ['ID', 'Nome', 'Telefone', 'Data', 'Consultor', 'Tipo de visita', 'Status da visita'];
    }
    CarregarVisitas(): void {
        this._visitaService.listar().subscribe(response => {
            this.visitas = response;
        });
    }
}
