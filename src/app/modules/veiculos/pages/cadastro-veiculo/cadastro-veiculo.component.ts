import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeiculoService } from 'src/app/core/services/veiculo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.scss']
})
export class CadastroVeiculoComponent {
  veiculoForm: FormGroup;

  constructor(private fb: FormBuilder, private veiculoService: VeiculoService, private snackBar: MatSnackBar) {
    this.veiculoForm = this.fb.group({
      modelo: ['', Validators.required],
      placa: ['', Validators.required],
      grupo_id: ['', Validators.required]
    });
  }

  cadastrarVeiculo() {
    if (this.veiculoForm.valid) {
      this.veiculoService.adicionarVeiculo(this.veiculoForm.value).subscribe(() => {
        this.snackBar.open('Veículo cadastrado com sucesso!', 'Fechar', { duration: 3000 });
      });
    }
  }
}
