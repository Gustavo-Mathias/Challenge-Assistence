import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GrupoVeiculo } from '../../modules/grupo-veiculo.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GrupoVeiculoService {
  private apiUrl = `${environment.apiUrl}grupoveiculo`; // URL dinâmica

  constructor(private http: HttpClient) {}

  getGrupos(): Observable<GrupoVeiculo[]> {
    return this.http.get<GrupoVeiculo[]>(this.apiUrl);
  }

  adicionarGrupo(grupo: GrupoVeiculo): Observable<GrupoVeiculo> {
    return this.http.post<GrupoVeiculo>(this.apiUrl, grupo);
  }

  atualizarGrupo(grupo: GrupoVeiculo): Observable<GrupoVeiculo> {
    return this.http.put<GrupoVeiculo>(`${this.apiUrl}/${grupo.id}`, grupo);
  }

  excluirGrupo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
