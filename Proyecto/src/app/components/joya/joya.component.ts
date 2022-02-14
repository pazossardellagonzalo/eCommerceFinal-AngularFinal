import { Component, OnInit } from '@angular/core';
import { ApirestService } from "../../services/apirest.service";
import { iJoya, iRopa, Joyas } from "../../models/producto";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-joya',
  templateUrl: './joya.component.html',
  styleUrls: ['./joya.component.css']
})
export class JoyaComponent implements OnInit {
  joya: Joyas[] = []

  constructor(public apirestService: ApirestService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getJoyas();
  }

  getJoyas(){
    this.apirestService.getJoyas().subscribe(joya => {
      this.joya = joya;      
    })
  } 
  
  deleteProducto(cBarra: string){
    if(confirm('¿Seguro que quieres borrar el producto?')) {
    this.apirestService.deleteProducto(cBarra).subscribe()
  }
    this.joya = this.joya.filter((encontrar) => encontrar.cBarra !== cBarra)
  }

}
