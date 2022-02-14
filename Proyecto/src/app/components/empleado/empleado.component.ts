import { Component, OnInit } from '@angular/core';
import { ApirestService } from "../../services/apirest.service";
import { Empleado, empleadoNormal, iEmpleadoNormal, iManager, Sueldo } from "../../models/empleado";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleado: empleadoNormal[] = []
  sueldoTotal: any

  constructor(public apirestService: ApirestService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(){
    this.apirestService.getEmpleados().subscribe(empleado => {
      this.empleado = empleado;      
    })
  } 
  
  deleteEmpleado(dni: string){
    if(confirm('¿Seguro que quieres borrar el empleado?')) {
    this.apirestService.deleteEmpleado(dni).subscribe()
  }
    this.empleado = this.empleado.filter((encontrar) => encontrar.dni !== dni)
  }

}