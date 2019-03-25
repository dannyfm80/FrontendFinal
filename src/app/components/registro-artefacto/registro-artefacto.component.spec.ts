import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroArtefactoComponent } from './registro-artefacto.component';

describe('RegistroArtefactoComponent', () => {
  let component: RegistroArtefactoComponent;
  let fixture: ComponentFixture<RegistroArtefactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroArtefactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroArtefactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
