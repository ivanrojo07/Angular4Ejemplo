import {Injectable} from '@angular/core';
import {Auto} from '../autos/auto';

@Injectable()

export class AutoService {
	public auto: Auto;
	public autos: Array<Auto>;

	constructor() {
		// code...
		this.auto = new Auto('','','');
		this.autos = [ 
			new Auto('tsuru','25','rojo')
			];
	}

	addAuto(auto: Auto){
		this.autos.push(auto);
		return this.getAuto();
	}
	getAuto(){
		return this.autos;
	}
	deleteAuto(id:number){
		this.autos.splice(id,1);
		return this.getAuto();
	}
}
