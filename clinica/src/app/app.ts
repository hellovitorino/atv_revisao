import { Component } from '@angular/core';
import { CadastroConsulta } from './cadastro-consulta/cadastro-consulta';
import { ListaConsultas } from './lista-consultas/lista-consultas';

@Component({
  selector: 'app-root',
  imports: [CadastroConsulta, ListaConsultas],
  template: `
    <h1>Clínica Médica</h1>
    <app-cadastro-consulta />
    <hr />
    <app-lista-consultas />
  `,
})
export class App {}