import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routes as AppRoutes } from './routes';

const routes: Routes = [...AppRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [RouterModule],
})
export class RoutingModule {}
