import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNovoProdutoComponent } from './form-novo-produto.component';

describe('FormNovoProdutoComponent', () => {
  let component: FormNovoProdutoComponent;
  let fixture: ComponentFixture<FormNovoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNovoProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNovoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
