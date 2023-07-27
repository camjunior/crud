import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss'],
})
export class EditarProdutoComponent implements OnInit {
  produto: Produto = {
    id: 0,
    nome: '',
    fornecedor: '',
    valor: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const produtoId = +params['id'];
      if (produtoId) {
        this.produtoService.obterProdutoPorId(produtoId).subscribe((produto) => {
          this.produto = produto;
        });
      } else {
        // Tratar a situação quando o ID não é encontrado ou é inválido
        console.error('ID do produto não encontrado ou inválido.');
        this.router.navigate(['/listar-produtos']);
      }
    });
  }

  atualizarProduto() {
    this.produtoService.atualizarProduto(this.produto).subscribe(() => {
      this.router.navigate(['/listar-produtos']);
    });
  }

    voltarParaListagem() {
    this.router.navigate(['/listar-produtos']);
  }
}
