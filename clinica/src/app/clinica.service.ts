import { Injectable, signal } from '@angular/core';
import { Consulta } from './consulta';

@Injectable({ providedIn: 'root' })
export class ClinicaService {
  private readonly chave = 'consultas';

  consultas = signal<Consulta[]>(this.carregar());

  private carregar(): Consulta[] {
    const json = sessionStorage.getItem(this.chave);
    return json ? (JSON.parse(json) as Consulta[]) : [];
  }

  private salvar(): void {
    sessionStorage.setItem(this.chave, JSON.stringify(this.consultas()));
  }

  adicionar(consulta: Consulta): void {
    this.consultas.update((lista) => [...lista, consulta]);
    this.salvar();
  }

  listar(): Consulta[] {
    return this.consultas();
  }

  calcularTotal(): number {
    return this.consultas().reduce((total, c) => total + c.preco, 0);
  }
}