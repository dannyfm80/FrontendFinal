import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAccidenteComponent } from './registro-accidente.component';

describe('RegistroAccidenteComponent', () => {
  let component: RegistroAccidenteComponent;
  let fixture: ComponentFixture<RegistroAccidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAccidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAccidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
