import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {

  registroForm: FormGroup;
  cliente? : Cliente = {
    codigo: 'RGT',
    nombre: 'Nombre',
    numeroDocumento: '9115425',
    tipoDocumento: 1,
    correo: 'rgt@gmail.com'
  }

  constructor() {
    this.registroForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Cliente registro', this.cliente)
  }
}
