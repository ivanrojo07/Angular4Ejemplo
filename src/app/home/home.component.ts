import {Component} from '@angular/core';
//importar el servicio
import {RopaService} from '../services/ropa.service';

@Component({
	selector: 'home',
	templateUrl: './home.component.html', 
	providers: [RopaService]
})

export class HomeComponent{
	public titulo: string;
	public listado_ropa: Array<string>;
	public prenda_a_guardar: string;
	public fecha;
	constructor(private _ropaService: RopaService){
		this.titulo = 'Pagina Principal';
		this.prenda_a_guardar='';
		this.fecha = new Date();

	}

	ngOnInit(){
		this.listado_ropa = this._ropaService.getRopa();
		//console.log(this._ropaService.prueba());
		// console.log(this.listado_ropa);

	}
	guardarPrenda(){
		if (this.prenda_a_guardar != '') {
			// code...
			this._ropaService.addRopa(this.prenda_a_guardar);
			this.prenda_a_guardar='';
		}
	}

	eliminarPrenda(index: number){
		alert(index);
		this._ropaService.deleteRopa(index);
	}
}