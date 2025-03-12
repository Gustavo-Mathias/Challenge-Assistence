import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VeiculoService } from 'src/app/core/services/veiculo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html',
  styleUrls: ['./editar-veiculo.component.scss']
})
export class EditarVeiculoComponent implements OnInit {
  veiculoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private veiculoService: VeiculoService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditarVeiculoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.veiculoForm = this.fb.group({
      id: [data.veiculo.id],
      modelo: [data.veiculo.modelo, Validators.required],
      placa: [data.veiculo.placa, Validators.required],
      grupo_id: [data.veiculo.grupo_id, Validators.required]
    });
  }

  ngOnInit(): void {}

  salvar(): void {
    if (this.veiculoForm.valid) {
      this.veiculoService.atualizarVeiculo(this.veiculoForm.value).subscribe(() => {
        this.snackBar.open('Veículo atualizado com sucesso!', 'Fechar', { duration: 3000 });
        this.dialogRef.close(true); // Fecha o modal e sinaliza sucesso
      });
    }
  }

  cancelar(): void {
    this.dialogRef.close(false); // Fecha o modal sem salvar
  }
}
