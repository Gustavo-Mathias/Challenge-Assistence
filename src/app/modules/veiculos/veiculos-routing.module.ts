import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroVeiculoComponent } from './pages/cadastro-veiculo/cadastro-veiculo.component';
import { ListagemVeiculosComponent } from './pages/listagem-veiculos/listagem-veiculos.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroVeiculoComponent },
  { path: 'listagem', component: ListagemVeiculosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
