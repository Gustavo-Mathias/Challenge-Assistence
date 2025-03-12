import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'grupos/listagem', pathMatch: 'full' }, 
  { path: 'grupos', loadChildren: () => import('./modules/grupos/grupos.module').then(m => m.GruposModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
