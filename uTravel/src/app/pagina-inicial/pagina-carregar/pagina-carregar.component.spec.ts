import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCarregarComponent } from './pagina-carregar.component';

describe('PaginaCarregarComponent', () => {
  let component: PaginaCarregarComponent;
  let fixture: ComponentFixture<PaginaCarregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCarregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCarregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
