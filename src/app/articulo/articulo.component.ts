import {Component} from '@angular/core';
import {PeticionesService} from '../services/peticiones.service';

@Component({
	selector: 'articulos',
	templateUrl: './articulo.component.html',
	providers: [PeticionesService]
})

export class ArticuloComponent{
	public titulo: string;
	public articulos: Object;
	public errorMessage;
	public cargando: boolean;
	constructor(private _peticionesService: PeticionesService) {
		// code...
		this.titulo = 'Articulos de una API externa';
		this.cargando=true;
	}
	ngOnInit(){
		this._peticionesService.getArticulos().subscribe(
			result=>{
				this.articulos=result;
				this.cargando= false;
				console.log(result);
				if(!this.articulos){
				console.log('Error en el servidor');
				}

			},
			error=>{
				this.errorMessage = error;
				console.log(this.errorMessage);
			});
	}
}