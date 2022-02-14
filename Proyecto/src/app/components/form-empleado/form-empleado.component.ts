import { Component, OnInit } from '@angular/core';
import { ApirestService } from "../../services/apirest.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iEmpleadoNormal } from 'src/app/models/empleado';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {
  empleadoForm: FormGroup;
  dni: string | null;

  constructor(
    public apirestService: ApirestService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    ) {
      this.empleadoForm = this.fb.group({
        dni: ['', Validators.required],
        nombre: ['', Validators.required],
        tipoEmpleado: ['', Validators.required],
        tlf: ['', Validators.required],
        departamento: ['', Validators.required],
        jornada: ['', Validators.required],
        horario: ['', Validators.required],
        sueldo: ['', Validators.required],
      })
      this.dni = this.aRouter.snapshot.paramMap.get('dni');
    }

  ngOnInit(): void {
    this.putEmpleado();
  }

  addEmpleado(){
    const emplead: iEmpleadoNormal = {
      dni: this.empleadoForm.get('dni')?.value,
      nombre: this.empleadoForm.get('nombre')?.value,
      tipoEmpleado: this.empleadoForm.get('tipoEmpleado')?.value,
      tlf: this.empleadoForm.get('tlf')?.value,
      departamento: this.empleadoForm.get('departamento')?.value,
      jornada: this.empleadoForm.get('jornada')?.value,
      horario: this.empleadoForm.get('horario')?.value,
      sueldo: this.empleadoForm.get('sueldo')?.value,
    }

    if(this.dni !== null){
      this.apirestService.putEmpleado(this.dni, emplead).subscribe()
        this.toastr.info('El empleado fue actualizado correctamente', 'Empleado actualizado');
    }else{
      this.apirestService.postEmpleado(emplead).subscribe()
      this.toastr.success('El empleado fue creado correctamente', 'Empleado creado');
      this.empleadoForm.reset()
    }
    
  }

  putEmpleado() {
    if (this.dni !== null) {
      this.apirestService.getEmpleado(this.dni).subscribe(data => {
        this.empleadoForm.setValue({
          dni: data.dni,
          nombre: data.nombre,
          tipoEmpleado: data.tipoEmpleado,
          tlf: data.tlf,
          departamento: data.departamento,
          jornada: data.jornada,
          horario: data.horario,
          sueldo: data.sueldo,
        })
      })
    }
  }

}
