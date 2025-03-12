import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { CadastroVeiculoComponent } from './pages/cadastro-veiculo/cadastro-veiculo.component';
import { ListagemVeiculosComponent } from './pages/listagem-veiculos/listagem-veiculos.component';

import { MaterialModule } from 'src/app/material.module';
import { EditarVeiculoComponent } from './components/editar-veiculo/editar-veiculo.component';

@NgModule({
  declarations: [
    CadastroVeiculoComponent,
    ListagemVeiculosComponent,
    EditarVeiculoComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class VeiculosModule { }
