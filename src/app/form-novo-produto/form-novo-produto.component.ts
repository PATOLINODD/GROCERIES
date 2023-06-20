import { ProdutosServicesService } from './../services/produtos-services.service';
import { HttpClient } from '@angular/common/http';
import { produtoObj } from './../models/produtoObj';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Produto } from '../models/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-novo-produto',
  templateUrl: './form-novo-produto.component.html',
  styleUrls: ['./form-novo-produto.component.scss'],
})
export class FormNovoProdutoComponent implements OnInit {
  @Output() aoEnviar = new EventEmitter<Produto>();

  produto: Produto;

  constructor(private httpClient: ProdutosServicesService, private router: Router) {
    this.produto = produtoObj;
  }

  ngOnInit(): void {}

  enviarDados() {
    // this.aoEnviar.emit(this.produto);
    // this.limparCampos();
    this.httpClient.adicionar(this.produto).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl("listaProdutos");
    }, (error) => {
      console.error(error);
    });
  }

  get Produto() {
    return this.produto;
  }
  set Produto(produto: Produto){
    this.produto = produto;
  }
  limparCampos(){
    // this.produto = {};
  }
}
