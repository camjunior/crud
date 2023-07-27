import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { HttpProdutoService } from './http-produto.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroProdutoComponent,
    ListarProdutosComponent,
    EditarProdutoComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpProdutoService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
