import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'control-flow', component: ControlFlowComponent },
  { path: 'input-output', component: InputOutputComponent },
  { path: 'service', component: ServiceComponent },
];
