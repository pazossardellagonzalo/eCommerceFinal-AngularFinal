import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/models/empleado';
import { ApirestService } from "../../services/apirest.service";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  manager: Manager[] = []

  constructor(public apirestService: ApirestService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getManagers();
  }

  getManagers(){
    this.apirestService.getManagers().subscribe(manager => {
      this.manager = manager;      
    })
  } 
  
  deleteManager(dni: string){
    if(confirm('¿Seguro que quieres borrar el empleado?')) {
    this.apirestService.deleteEmpleado(dni).subscribe()
  }
    this.manager = this.manager.filter((encontrar) => encontrar.dni !== dni)
  }
}
