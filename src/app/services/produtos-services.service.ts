import { Produto } from './../models/produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosServicesService {

  private produtos: Produto[] = [];
  private url: string = "http://localhost:3000/produtos";

constructor(private httpClient: HttpClient) { }

get listaProdutos(){
  return this.produtos;
}

adicionar(produto: Produto): Observable<Produto>{
  // this.produtos.push(produto);
  return this.httpClient.post<Produto>(this.url, produto);
}
listarProdutos(): Observable<Produto[]>{
  return this.httpClient.get<Produto[]>(this.url);
}
}
