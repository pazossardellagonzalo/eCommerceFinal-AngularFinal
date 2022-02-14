import { Component, OnInit } from '@angular/core';
import { ApirestService } from "../../services/apirest.service";
import { Pedido } from "../../models/pedido";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedido: Pedido[] = [];

  constructor(public apirestService: ApirestService, private toastr: ToastrService ) { }

  ngOnInit() {
    this.getPedidos();
  }

  getPedidos(){
    this.apirestService.getPedidos().subscribe(pedido => {
      this.pedido = pedido;      
    })
  } 

  deletePedido(dniCliente: string){
    if(confirm('¿Seguro que quieres borrar el pedido?')) {
    this.apirestService.deletePedido(dniCliente).subscribe()
  }
    this.pedido = this.pedido.filter((encontrar) => encontrar.dniCliente !== dniCliente)
  }

}
