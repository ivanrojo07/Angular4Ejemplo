import {Component} from '@angular/core';

@Component({
	selector: 'fruta',
	templateUrl: './fruta.component.html',
	
})

export class FrutaComponent{
	public nombre_componente:string;
	public listado_fruta:string;

	public nombre: string;
	public edad: number;
	public mayorDeEdad: boolean;
	public trabajos:Array<any>;
	comodin:any;

	constructor(){
		this.nombre_componente = 'Componente de fruta';
		this.listado_fruta  = 'Naranja, manzana, pera y sandia';
		this.nombre = 'Iván Rojo';
		this.edad = 24;
		this.mayorDeEdad = true;
		this.trabajos  = ['Programador', 24, true];
		this.comodin  = 'Hola';
		
	}

	ngOnInit(){
		//this.holaMundo(this.nombre);

		//variables y alcance
		var uno = 8;
		var dos = 15;
		if (uno ==8) {
			// let solo tomara el valor de la variable dentro del bloque
			let uno = 3;
			var dos = 88;
			console.log('DENTRO DEL IF'+uno)
		}
		console.log('FUERA DEL IF'+uno);

	}
	holaMundo(nombre){
		alert('Hola '+nombre);
	}
}