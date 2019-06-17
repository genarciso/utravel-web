import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCentralComponent } from './pagina-central.component';

describe('PaginaCentralComponent', () => {
  let component: PaginaCentralComponent;
  let fixture: ComponentFixture<PaginaCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
