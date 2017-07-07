import {Injectable} from '@angular/core';

@Injectable()

export class RopaService{
	public nombre_prenda: string;
	public coleccion_ropa: Array<string>;
	constructor() {
		// code...
		this.nombre_prenda = 'Pantalones vaqueros';
		this.coleccion_ropa = ['Pantalon blanco', 'Camiseta negra', 'Zapatos gris'];
	}
	prueba(){

		return this.nombre_prenda;
	}

	addRopa(nombre_ropa){
		this.coleccion_ropa.push(nombre_ropa);
		return this.getRopa();
	}

	getRopa(){
		return this.coleccion_ropa;
	}
	deleteRopa(id:number){
		this.coleccion_ropa.splice(id,1);
		return this.getRopa();
	}
}