import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGroceriesComponent } from './lista-groceries.component';

describe('ListaGroceriesComponent', () => {
  let component: ListaGroceriesComponent;
  let fixture: ComponentFixture<ListaGroceriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGroceriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGroceriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
