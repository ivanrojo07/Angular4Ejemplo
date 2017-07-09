import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';

@Injectable()

export class PeticionesService{
	public url:string;
	constructor(private _http:Http){
		this.url = 'http://jsonplaceholder.typicode.com/posts';
	}
	getArticulos(){
		return this._http.get(this.url)
						.map(res => res.json());
	}
	getPrueba(){
		return 'Hola desde el servicio';	
	}
}