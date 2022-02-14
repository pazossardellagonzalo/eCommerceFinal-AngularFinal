import { Component, OnInit } from '@angular/core';
import { ApirestService } from "../../services/apirest.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iCliente } from 'src/app/models/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit { 
  clienteForm: FormGroup;
  dni: string | null;

  constructor(
    public apirestService: ApirestService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    ) {
      this.clienteForm = this.fb.group({
        dni: ['', Validators.required],
        nombre: ['', Validators.required],
        primerApellido: ['', Validators.required],
        segundoApellido: ['', Validators.required],
        edad: ['', Validators.required],
        pais: ['', Validators.required],
        sexo: ['', Validators.required],
        tlf: ['', Validators.required],
        socio: ['', Validators.required],
      })
      this.dni = this.aRouter.snapshot.paramMap.get('dni');
    }

  ngOnInit(): void {
    this.putCliente();
  }

  addCliente(){
    const client: iCliente = {
      dni: this.clienteForm.get('dni')?.value,
      nombre: this.clienteForm.get('nombre')?.value,
      primerApellido: this.clienteForm.get('primerApellido')?.value,
      segundoApellido: this.clienteForm.get('segundoApellido')?.value,
      edad: this.clienteForm.get('edad')?.value,
      pais: this.clienteForm.get('pais')?.value,
      sexo: this.clienteForm.get('sexo')?.value,
      tlf: this.clienteForm.get('tlf')?.value,
      socio: this.clienteForm.get('socio')?.value,
    }

    if(this.dni !== null){
      this.apirestService.putCliente(this.dni, client).subscribe()
        this.toastr.info('El cliente fue actualizado correctamente', 'Cliente actualizado');
    }else{
      this.apirestService.postCliente(client).subscribe()
      this.toastr.success('El cliente fue creado correctamente', 'Cliente creado');
      this.clienteForm.reset()
    }
    
  }

  putCliente() {
    if (this.dni !== null) {
      this.apirestService.getCliente(this.dni).subscribe(data => {
        this.clienteForm.setValue({
          dni: data.dni,
          nombre: data.nombre,
          primerApellido: data.primerApellido,
          segundoApellido: data.segundoApellido,
          edad: data.edad,
          pais: data.pais,
          sexo: data.sexo,
          tlf: data.tlf,
          socio: data.socio,
        })
      })
    }
  }

}