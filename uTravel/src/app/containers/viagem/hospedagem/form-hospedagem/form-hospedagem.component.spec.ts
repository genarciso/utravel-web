import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHospedagemComponent } from './form-hospedagem.component';

describe('FormHospedagemComponent', () => {
  let component: FormHospedagemComponent;
  let fixture: ComponentFixture<FormHospedagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHospedagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHospedagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
