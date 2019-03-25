import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefactoCrearComponent } from './artefacto-crear.component';

describe('ArtefactoCrearComponent', () => {
  let component: ArtefactoCrearComponent;
  let fixture: ComponentFixture<ArtefactoCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtefactoCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtefactoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
