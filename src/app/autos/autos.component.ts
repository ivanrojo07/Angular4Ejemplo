import {Component, OnInit} from '@angular/core';
import {Auto} from './auto';
//importar el servicio
import {AutoService} from '../services/auto.service';
import {PeticionesService} from '../services/peticiones.service';


@Component({
	selector: 'autos',
	templateUrl: './autos.component.html',
	providers: [PeticionesService, AutoService]
})

export class AutosComponent implements OnInit{
	public auto: Auto;
	public titulo: string;
	public listado_de_autos:Array<Auto>;
	public articulos;
	constructor(private _peticionesService: PeticionesService,
		private _autoService: AutoService
		) {
		// code...
		this.titulo = 'Componente de autos';
		this.auto = new Auto('','','');

	}
	ngOnInit(){
		this.listado_de_autos = this._autoService.getAuto();

		console.log(this.listado_de_autos);
		console.log(this._peticionesService.getPrueba());
		this._peticionesService.getArticulos().subscribe(
		result=>{
			this.articulos=result;
			console.log(result);
			if(!this.articulos){
				console.log('Error en el servidor');
			}
		},
		error=>{
			var errorMessage = <any>error;
			console.log(errorMessage);
		});
	}
	onSubmit(){
		if (this.auto.nombre != '' && this.auto.color !='' && this.auto.potencia != '') {
			// code...
			this._autoService.addAuto(this.auto);
			console.log(this.listado_de_autos);
			this.auto = new Auto('','','');
		}
	}
	eliminarAuto(index: number){
		this._autoService.deleteAuto(index);
	}
}