import { Component, inject } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ClinicaService } from '../clinica.service';

@Component({
  selector: 'app-lista-consultas',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './lista-consultas.html',
  styleUrl: './lista-consultas.css',
})
export class ListaConsultas {
  service = inject(ClinicaService);
}