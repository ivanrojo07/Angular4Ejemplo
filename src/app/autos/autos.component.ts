import {Component} from '@angular/core';
import {Auto} from './auto';
//importar el servicio
import {AutoService} from '../services/auto.service';

@Component({
	selector: 'autos',
	templateUrl: './autos.component.html',
	providers: [AutoService]
})

export class AutosComponent{
	public auto: Auto;
	public titulo: string;
	public listado_de_autos:Array<Auto>;
	constructor(private _autoService: AutoService) {
		// code...
		this.titulo = 'Componente de autos';
		this.auto = new Auto('','','');
	}
	ngOnInit(){
		this.listado_de_autos = this._autoService.getAuto();
		console.log(this.listado_de_autos);
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