import { Routes } from '@angular/router';
import { MisTareas } from './components/mis-tareas/mis-tareas';
import { NuevaTarea } from './components/nueva-tarea/nueva-tarea';
import { PaginaError } from './components/pagina-error/pagina-error';
import { EquipoLider } from './comunicacion/equipo-lider/equipo-lider';

export const routes: Routes = [
    {path: "", component: MisTareas},
    {path: "tareas", component: MisTareas},
    {path: "nueva-tarea", component: NuevaTarea},
    {path:'comunicacion', component:EquipoLider},
    { path: "**", component: PaginaError}
];
