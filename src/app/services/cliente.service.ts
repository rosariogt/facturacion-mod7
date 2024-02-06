import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  registrarCliente(datos: Cliente) {
    this.http.post(`${this.apiUrl}/cliente`, datos).subscribe(
      (response) => {
        console.log('Data posted successfully:', response);
      },
      (error) => {
        console.error('Error posting data:', error);
      }
    );;
  }
}
