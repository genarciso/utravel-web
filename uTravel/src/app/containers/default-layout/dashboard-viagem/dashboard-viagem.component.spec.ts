import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardViagemComponent } from './dashboard-viagem.component';

describe('DashboardViagemComponent', () => {
  let component: DashboardViagemComponent;
  let fixture: ComponentFixture<DashboardViagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardViagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
