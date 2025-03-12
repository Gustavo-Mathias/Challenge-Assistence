import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GrupoVeiculoService } from 'src/app/core/services/grupo-veiculo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-grupo',
  templateUrl: './editar-grupo.component.html',
  styleUrls: ['./editar-grupo.component.scss']
})
export class EditarGrupoComponent implements OnInit {
  grupoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private grupoService: GrupoVeiculoService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditarGrupoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.grupoForm = this.fb.group({
      id: [data.grupo.id],
      nome: [data.grupo.nome, Validators.required],
      descricao: [data.grupo.descricao, Validators.required]
    });
  }

  ngOnInit(): void {}

  salvar(): void {
    if (this.grupoForm.valid) {
      this.grupoService.atualizarGrupo(this.grupoForm.value).subscribe(() => {
        this.snackBar.open('Grupo atualizado com sucesso!', 'Fechar', { duration: 3000 });
        this.dialogRef.close(true); // Fecha o modal e sinaliza sucesso
      });
    }
  }

  cancelar(): void {
    this.dialogRef.close(false); // Fecha o modal sem salvar
  }
}
