import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  fazerLogin() {
    this.authService.login(this.username, this.password).subscribe((autenticado) => {
      if (autenticado) {
        // Redirecionar para a página de cadastro de produtos após o login
        this.router.navigate(['/cadastro-produto']);
      } else {
        alert('Usuário ou senha inválidos.');
      }
    });
  }
}
