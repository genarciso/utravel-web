import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarViagemComponent } from './registrar-viagem.component';

describe('RegistrarViagemComponent', () => {
  let component: RegistrarViagemComponent;
  let fixture: ComponentFixture<RegistrarViagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarViagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
