import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirplanesComponent } from './airplanes/airplanes.component';
import { PilotsComponent } from './pilots/pilots.component';

const routes: Routes = [
  {path: 'airplanes', component:AirplanesComponent },
  {path: 'pilots', component: PilotsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
