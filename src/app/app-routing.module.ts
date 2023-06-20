import { FormNovoProdutoComponent } from './form-novo-produto/form-novo-produto.component';
import { ListaGroceriesComponent } from './lista-groceries/lista-groceries.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'formulario', pathMatch: 'full' },
  {
    path: 'listaProdutos',
    component: ListaGroceriesComponent,
  },
  {
    path: 'formulario',
    component: FormNovoProdutoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
