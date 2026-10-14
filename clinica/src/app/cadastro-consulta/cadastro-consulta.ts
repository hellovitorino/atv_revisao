import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Consulta } from '../consulta';
import { ClinicaService } from '../clinica.service';

@Component({
  selector: 'app-cadastro-consulta',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-consulta.html',
  styleUrl: './cadastro-consulta.css',
})
export class CadastroConsulta {
  private fb = inject(FormBuilder);
  private service = inject(ClinicaService);

  form = this.fb.nonNullable.group({
    nomePaciente: ['', Validators.required],
    preco: [0, [Validators.required, Validators.min(0.01)]],
    data: ['', Validators.required],
  });

  cadastrar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const consulta = new Consulta();
    const valores = this.form.getRawValue();
    consulta.nomePaciente = valores.nomePaciente;
    consulta.preco = valores.preco;
    consulta.data = valores.data;

    this.service.adicionar(consulta);
    this.form.reset({ nomePaciente: '', preco: 0, data: '' });
  }
}