import { Component, OnInit } from '@angular/core';
import { ApirestService } from "../../services/apirest.service";
import { Cliente } from "../../models/cliente";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente[] = [];

  constructor(public apirestService: ApirestService, private toastr: ToastrService ) { }

  ngOnInit() {
    this.getCliente();
  }

  getCliente(){
    this.apirestService.getClientes().subscribe(cliente => {
      this.cliente = cliente;      
    })
  } 

  deleteCliente(dni: string){
    if(confirm('¿Seguro que quieres borrar el cliente?')) {
    this.apirestService.deleteCliente(dni).subscribe()
  }
    this.cliente = this.cliente.filter((encontrar) => encontrar.dni !== dni)
  }

}
