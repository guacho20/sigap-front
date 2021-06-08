import { AfterViewChecked, ViewChild, Component } from '@angular/core';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { UtilitarioService } from 'ngprime-core';

@Component({
    selector: 'app-barmenu',
    template: '',
  })

export abstract class BarMenu implements AfterViewChecked {

    @ViewChild('barBotones', { static: false }) barBotones: BreadcrumbsComponent;

    ngAfterViewChecked(): void {
        if (this.barBotones !== undefined) {
            this.barBotones.onInsertar = () => { this.insertar(); };
            this.barBotones.onEliminar = () => { this.eliminar(); };
            this.barBotones.onGuardar = () => { this.guardar(); };
        }
    }

    /**
     * Ejecuta este método cuando se da click en el boton insertar
     */
    abstract insertar(): void;

    /**
     * Ejecuta este método cuando se da click en el boton guardar
     */
    abstract guardar(): void;

    /**
     * Ejecuta este método cuando se da click en el boton eliminar
     */
    abstract eliminar(): void;

}
