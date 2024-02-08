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
  /* cliente? : Cliente = {
    codigo: 'RGT',
    nombre: 'Nombre',
    numeroDocumento: '9115425',
    tipoDocumento: 1,
    correo: 'rgt@gmail.com'
  } */
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  formRespuesta = '';

  constructor(private fb: FormBuilder) {
    /* this.registroForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }); */
    this.registroForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      numeroDocumento: ['', Validators.required, Validators.minLength(7)],
      tipoDocumento: ['', Validators.required],
      correo: ['', Validators.required, Validators.email, Validators.pattern(this.emailPattern)],
    });
   }

  ngOnInit(): void {
  }

  registrarCliente() {
    /* console.log('Cliente registro', this.cliente); */
    if (this.registroForm.valid) {
      this.formRespuesta = 'Formulario VALIDO';

    } else {
      this.formRespuesta = 'Formulario NO VALIDO';
    }
  }

  get codigo(){
    return this.registroForm.get('codigo');
  }
  get nombre(){
    return this.registroForm.get('nombre');
  }
  get numeroDocumento(){
    return this.registroForm.get('numeroDocumento');
  }
  get correo(){
    return this.registroForm.get('correo');
  }
}
