import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLocomocaoComponent } from './form-locomocao.component';

describe('FormLocomocaoComponent', () => {
  let component: FormLocomocaoComponent;
  let fixture: ComponentFixture<FormLocomocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLocomocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLocomocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
