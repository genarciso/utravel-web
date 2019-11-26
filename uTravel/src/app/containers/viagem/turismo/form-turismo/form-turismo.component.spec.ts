import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTurismoComponent } from './form-turismo.component';

describe('FormTurismoComponent', () => {
  let component: FormTurismoComponent;
  let fixture: ComponentFixture<FormTurismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTurismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
