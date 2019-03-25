import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaActualizarComponent } from './persona-actualizar.component';

describe('PersonaActualizarComponent', () => {
  let component: PersonaActualizarComponent;
  let fixture: ComponentFixture<PersonaActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
