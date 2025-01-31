import { Routes } from '@angular/router';
import { MapaComponent } from './pages/mapa/mapa.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mapa' },
  { path: 'mapa', component: MapaComponent },
];
