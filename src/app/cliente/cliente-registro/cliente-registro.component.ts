import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {

  registroForm: FormGroup;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  formRespuesta = '';

  bandera = false;


  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      numeroDocumento: ['', [Validators.required, Validators.minLength(7)]],
      tipoDocumento: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
    });
   }

  ngOnInit(): void {
  }









  registrarCliente() {
    /* console.log('Cliente registro', this.cliente); */
    if (this.registroForm.valid) {
      this.bandera = true;
      this.formRespuesta = 'REGISTRO EXITOSO';
    } else {
      this.formRespuesta = 'Registro no exitoso';
    }
  }

}
