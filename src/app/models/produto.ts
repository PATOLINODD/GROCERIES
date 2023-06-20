export interface Produto {
  id?: number | string;
  nomeProduto: string;
  dataCompra: string;
  quantidade: string | number;
  preco: string | number;
  dataValidade: string;
}
