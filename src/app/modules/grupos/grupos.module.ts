import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GruposRoutingModule } from './grupos-routing.module';
import { CadastroGrupoComponent } from './pages/cadastro-grupo/cadastro-grupo.component';
import { ListagemGruposComponent } from './pages/listagem-grupos/listagem-grupos.component';

import { MaterialModule } from 'src/app/material.module';
import { EditarGrupoComponent } from './components/editar-grupo/editar-grupo.component';

@NgModule({
  declarations: [
    CadastroGrupoComponent,
    ListagemGruposComponent,
    EditarGrupoComponent
  ],
  imports: [
    CommonModule,
    GruposRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class GruposModule { }
