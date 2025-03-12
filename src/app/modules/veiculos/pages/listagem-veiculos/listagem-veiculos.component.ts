import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VeiculoService } from 'src/app/core/services/veiculo.service';
import { Veiculo } from 'src/app/core/models/veiculo.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditarVeiculoComponent } from '../../components/editar-veiculo/editar-veiculo.component';

@Component({
  selector: 'app-listagem-veiculos',
  templateUrl: './listagem-veiculos.component.html',
  styleUrls: ['./listagem-veiculos.component.scss']
})
export class ListagemVeiculosComponent implements OnInit {

  displayedColumns: string[] = ['modelo', 'placa', 'acoes'];
  dataSource = new MatTableDataSource<Veiculo>();

  constructor(
    private veiculoService: VeiculoService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.carregarVeiculos();
  }

  carregarVeiculos(): void {
    this.veiculoService.getVeiculos().subscribe(
      data => {
        this.dataSource.data = data;
      },
      error => {
        console.error('Erro ao buscar veículos:', error);
        this.snackBar.open('Erro ao carregar veículos.', 'Fechar', { duration: 3000 });
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editarVeiculo(veiculo: Veiculo): void {
    const dialogRef = this.dialog.open(EditarVeiculoComponent, {
      width: '400px',
      data: { veiculo }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.carregarVeiculos(); // Atualiza a lista após edição
      }
    });
  }

  excluirVeiculo(id: number): void {
    if (confirm('Tem certeza que deseja excluir este veículo?')) {
      this.veiculoService.excluirVeiculo(id).subscribe(
        () => {
          this.dataSource.data = this.dataSource.data.filter(v => v.id !== id);
          this.snackBar.open('Veículo excluído com sucesso!', 'Fechar', { duration: 3000 });
        },
        error => {
          console.error('Erro ao excluir veículo:', error);
          this.snackBar.open('Erro ao excluir veículo.', 'Fechar', { duration: 3000 });
        }
      );
    }
  }
}
