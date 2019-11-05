import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoGeralComponent } from './orcamento-geral.component';

describe('OrcamentoGeralComponent', () => {
  let component: OrcamentoGeralComponent;
  let fixture: ComponentFixture<OrcamentoGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcamentoGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
