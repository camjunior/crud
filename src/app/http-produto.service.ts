import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpProdutoService {
  private backendUrl = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) {}

  obterListaProdutos(): Observable<any[]> {
    return this.http.get<any[]>(this.backendUrl);
  }

  obterProdutoPorId(produtoId: number): Observable<any> {
    const url = `${this.backendUrl}/${produtoId}`;
    return this.http.get<any>(url);
  }

  cadastrarProduto(produto: any): Observable<any> {
    return this.http.post<any>(this.backendUrl, produto);
  }

  atualizarProduto(produto: any): Observable<any> {
    const url = `${this.backendUrl}/${produto.id}`;
    return this.http.put<any>(url, produto);
  }

  removerProduto(produtoId: number): Observable<any> {
    const url = `${this.backendUrl}/${produtoId}`;
    return this.http.delete<any>(url);
  }
}
