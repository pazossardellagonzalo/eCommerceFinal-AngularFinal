import { Component, OnInit } from '@angular/core';
import { ApirestService } from "../../services/apirest.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iManager } from 'src/app/models/empleado';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-form-manager',
  templateUrl: './form-manager.component.html',
  styleUrls: ['./form-manager.component.css']
})
export class FormManagerComponent implements OnInit {
  managerForm: FormGroup;
  dni: string | null;

  constructor(
    public apirestService: ApirestService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    ) {
      this.managerForm = this.fb.group({
        dni: ['', Validators.required],
        nombre: ['', Validators.required],
        tipoEmpleado: ['', Validators.required],
        tlf: ['', Validators.required],
        departamento: ['', Validators.required],
        estudios: ['', Validators.required],
        sueldo: ['', Validators.required],
      })
      this.dni = this.aRouter.snapshot.paramMap.get('dni');
    }

  ngOnInit(): void {
    this.putManager();
  }

  addManager(){
    const manage: iManager = {
      dni: this.managerForm.get('dni')?.value,
      nombre: this.managerForm.get('nombre')?.value,
      tipoEmpleado: this.managerForm.get('tipoEmpleado')?.value,
      tlf: this.managerForm.get('tlf')?.value,
      departamento: this.managerForm.get('departamento')?.value,
      estudios: this.managerForm.get('estudios')?.value,
      sueldo: this.managerForm.get('sueldo')?.value,
    }

    if(this.dni !== null){
      this.apirestService.putManager(this.dni, manage).subscribe()
        this.toastr.info('El manager fue actualizado correctamente', 'Manager actualizado');
    }else{
      this.apirestService.postManager(manage).subscribe()
      this.toastr.success('El manager fue creado correctamente', 'Manager creado');
      this.managerForm.reset()
    }
    
  }

  putManager() {
    if (this.dni !== null) {
      this.apirestService.getEmpleado(this.dni).subscribe(data => {
        this.managerForm.setValue({
          dni: data.dni,
          nombre: data.nombre,
          tipoEmpleado: data.tipoEmpleado,
          tlf: data.tlf,
          departamento: data.departamento,
          estudios: data.estudios,
          sueldo: data.sueldo,
        })
      })
    }
  }

}
