import { Produto } from './../models/produto';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ProdutosServicesService } from '../services/produtos-services.service';

@Component({
  selector: 'app-lista-groceries',
  templateUrl: './lista-groceries.component.html',
  styleUrls: ['./lista-groceries.component.scss']
})

export class ListaGroceriesComponent implements OnInit {
  produtos: Produto[];

  constructor(private service: ProdutosServicesService) { }

  ngOnInit(): void {
    this.service.listarProdutos().subscribe((produtos: Produto[]) => {
      console.table(produtos);

      this.produtos = produtos;
    });
  }

}
