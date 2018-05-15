import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoDetallesComponent } from './equipo-detalles.component';

describe('EquipoDetallesComponent', () => {
  let component: EquipoDetallesComponent;
  let fixture: ComponentFixture<EquipoDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
