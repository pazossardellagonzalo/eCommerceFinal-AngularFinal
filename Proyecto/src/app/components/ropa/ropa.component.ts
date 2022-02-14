import { Component, OnInit } from '@angular/core';
import { ApirestService } from "../../services/apirest.service";
import { Ropa } from "../../models/producto";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit {
  ropa: Ropa[] = []

  constructor(public apirestService: ApirestService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getRopas();
  }

  getRopas(){
    this.apirestService.getRopas().subscribe(ropa => {
      this.ropa = ropa;      
    })
  } 
  
  deleteProducto(cBarra: string){
    if(confirm('¿Seguro que quieres borrar el producto?')) {
    this.apirestService.deleteProducto(cBarra).subscribe()
  }
    this.ropa = this.ropa.filter((encontrar) => encontrar.cBarra !== cBarra)
  }

}
