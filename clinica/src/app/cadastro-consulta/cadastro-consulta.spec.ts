import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroConsulta } from './cadastro-consulta';

describe('CadastroConsulta', () => {
  let component: CadastroConsulta;
  let fixture: ComponentFixture<CadastroConsulta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroConsulta],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroConsulta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
