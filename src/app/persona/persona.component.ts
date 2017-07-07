import { Component } from '@angular/core';
import {Persona} from './persona';

@Component({
	selector: 'persona',
	templateUrl: './persona.component.html',
})

export class PersonaComponent{
	public persona_titulo = 'Componente persona';
	public persona : Persona;
	public trabajadores : Array<Persona>;
	public trabajador_externo: boolean;
	public color: string;
	public color_seleccionado: string;
	constructor(){
		this.persona = new Persona('Ivan Rojo',24,'Programador',true);
		this.trabajadores =	[
						new Persona('Ivan Rojo',24,'Programador',true),
						new Persona('Juan Pedro',42,'Abogado',false),
						new Persona('Pedro Paramo',54,'Profesor',true)
		];
		this.trabajador_externo=false;
		this.color = 'blue';
		this.color_seleccionado= '#ccc';

	}
	ngOnInit(){
		
		console.log(this.persona);
		console.log(this.trabajadores);
	}
	cambiarExterno(valor){
		this.trabajador_externo=valor;
	}
	logColorSeleccionado(){
		console.log(this.color_seleccionado);
	}
}