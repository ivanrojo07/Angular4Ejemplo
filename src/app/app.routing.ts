import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { PersonaComponent } from './persona/persona.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent} from './contacto/contacto.component';

const appRoutes: Routes=[
	{path: '', component: HomeComponent },
	{path: 'home', component: HomeComponent},
	{path: 'contacto', component: ContactoComponent},
	{path: 'contacto/:page', component: ContactoComponent},
	{path: 'empleado', component: PersonaComponent},
	{path: 'fruta', component: FrutaComponent},
	{path: '**', component: PersonaComponent}
];

export const appRoutingProviders: any[]=[];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);