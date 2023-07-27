import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss'],
})
export class CadastroProdutoComponent {
  produto: Produto = {
    id: 0,
    nome: '',
    fornecedor: '',
    valor: 0,
  };

  constructor(private produtoService: ProdutoService, private router: Router) {}

  cadastrarProduto() {
    this.produtoService.criarProduto(this.produto).subscribe(() => {
      this.router.navigate(['/listar-produtos']);
    });
  }

    voltarParaListagem() {
    this.router.navigate(['/listar-produtos']);
  }
}
