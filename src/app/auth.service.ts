import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Importe a função 'map' daqui

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // URL do Backend

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        map((response: any) => { // Corrija a chamada da função 'map' aqui
          if (response && response.token) {
            // Se o login for bem-sucedido, armazene o token de autenticação no LocalStorage
            localStorage.setItem('jwtToken', response.token);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  criarNovoUsuario(username: string, password: string): Observable<any> {
    const novoUsuario = { username, password};
    return this.http.post<any>(`${this.apiUrl}/criar-usuario`, novoUsuario);
  }

  logout(): void {
    // Remova o token JWT do LocalStorage
    localStorage.removeItem('jwtToken');
    // Redirecione para a tela de login
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    // Verifique se há um token JWT no LocalStorage
    const token = localStorage.getItem('jwtToken');
    return !!token;
  }
}
