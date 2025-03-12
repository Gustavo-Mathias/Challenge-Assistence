import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GrupoVeiculoService } from 'src/app/core/services/grupo-veiculo.service';
import { GrupoVeiculo } from '../../../grupo-veiculo.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditarGrupoComponent } from '../../components/editar-grupo/editar-grupo.component';

@Component({
  selector: 'app-listagem-grupos',
  templateUrl: './listagem-grupos.component.html',
  styleUrls: ['./listagem-grupos.component.scss']
})
export class ListagemGruposComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'acoes'];
  dataSource = new MatTableDataSource<GrupoVeiculo>();

  constructor(
    private grupoService: GrupoVeiculoService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.carregarGrupos();
  }

  carregarGrupos(): void {
    this.grupoService.getGrupos().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  editarGrupo(grupo: GrupoVeiculo): void {
    const dialogRef = this.dialog.open(EditarGrupoComponent, {
      width: '400px',
      data: { grupo }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.carregarGrupos(); // Atualiza a lista após edição
      }
    });
  }

  excluirGrupo(id: number): void {
    if (confirm('Tem certeza que deseja excluir este grupo?')) {
      this.grupoService.excluirGrupo(id).subscribe(() => {
        this.snackBar.open('Grupo excluído com sucesso!', 'Fechar', { duration: 3000 });
        this.carregarGrupos();
      });
    }
  }
}
