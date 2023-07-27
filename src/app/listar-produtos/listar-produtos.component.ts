import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss'],
})
export class ListarProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit() {
    this.obterListaProdutos();
  }

    editarProduto(id: number) {
    this.router.navigate(['/editar-produto', id]);
  }

  obterListaProdutos() {
    this.produtoService.obterListaProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  removerProduto(id: number) {
    this.produtoService.removerProduto(id).subscribe(() => {
      this.obterListaProdutos();
    });
  }
}
