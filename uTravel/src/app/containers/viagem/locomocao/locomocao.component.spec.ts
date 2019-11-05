import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocomocaoComponent } from './locomocao.component';

describe('LocomocaoComponent', () => {
  let component: LocomocaoComponent;
  let fixture: ComponentFixture<LocomocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocomocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocomocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
