import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GrupoVeiculoService } from 'src/app/core/services/grupo-veiculo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro-grupo',
  templateUrl: './cadastro-grupo.component.html',
  styleUrls: ['./cadastro-grupo.component.scss']
})
export class CadastroGrupoComponent {
  grupoForm: FormGroup;

  constructor(private fb: FormBuilder, private grupoService: GrupoVeiculoService, private snackBar: MatSnackBar) {
    this.grupoForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  cadastrarGrupo(): void {
    if (this.grupoForm.valid) {
      this.grupoService.adicionarGrupo(this.grupoForm.value).subscribe(() => {
        this.snackBar.open('Grupo cadastrado com sucesso!', 'Fechar', { duration: 3000 });
        this.grupoForm.reset();
      });
    }
  }
}
