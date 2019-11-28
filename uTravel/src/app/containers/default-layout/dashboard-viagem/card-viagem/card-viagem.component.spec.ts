import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViagemComponent } from './card-viagem.component';

describe('CardViagemComponent', () => {
  let component: CardViagemComponent;
  let fixture: ComponentFixture<CardViagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardViagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
