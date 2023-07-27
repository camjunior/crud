import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  criarNovoUsuario() {
    // Chamar o serviço para criar o novo usuário no backend
    this.authService.criarNovoUsuario(this.username, this.password)
      .subscribe((novoUsuario) => {
        console.log('Novo usuário criado:', novoUsuario);
        this.router.navigate(['/login']);
      });
  }
}

