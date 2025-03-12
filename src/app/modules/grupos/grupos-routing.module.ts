import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroGrupoComponent } from './pages/cadastro-grupo/cadastro-grupo.component';
import { ListagemGruposComponent } from './pages/listagem-grupos/listagem-grupos.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroGrupoComponent },
  { path: 'listagem', component: ListagemGruposComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GruposRoutingModule { }
