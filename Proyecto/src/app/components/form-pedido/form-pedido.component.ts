import { Component, OnInit } from '@angular/core';
import { ApirestService } from "../../services/apirest.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iPedido } from 'src/app/models/pedido';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html',
  styleUrls: ['./form-pedido.component.css']
})
export class FormPedidoComponent implements OnInit {
  pedidoForm: FormGroup;
  dniCliente: string | null;

  constructor(
    public apirestService: ApirestService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    ) {
      this.pedidoForm = this.fb.group({
        dniCliente: ['', Validators.required],
        nPedido: ['', Validators.required],
        objetos: ['', Validators.required],
        fecha: ['', Validators.required],
        importeTotal: ['', Validators.required],
      })
      this.dniCliente = this.aRouter.snapshot.paramMap.get('dniCliente');
    }

  ngOnInit(): void {
    this.putPedido();
  }

  addPedido(){
    const pedid: iPedido = {
      dniCliente: this.pedidoForm.get('dniCliente')?.value,
      nPedido: this.pedidoForm.get('nPedido')?.value,
      objetos: this.pedidoForm.get('objetos')?.value,
      fecha: this.pedidoForm.get('fecha')?.value,
      importeTotal: this.pedidoForm.get('importeTotal')?.value,
    }

    if(this.dniCliente !== null){
      this.apirestService.putPedido(this.dniCliente, pedid).subscribe()
        this.toastr.info('El cliente fue actualizado correctamente', 'Cliente actualizado');
    }else{
      this.apirestService.postPedido(pedid).subscribe()
      this.toastr.success('El cliente fue creado correctamente', 'Cliente creado');
      this.pedidoForm.reset()
    }
    
  }

  putPedido() {
    if (this.dniCliente !== null) {
      this.apirestService.getPedido(this.dniCliente).subscribe(data => {
        this.pedidoForm.setValue({
          dniCliente: data.dniCliente,
          nPedido: data.nPedido,
          objetos: data.objetos,
          fecha: data.fecha,
          importeTotal: data.importeTotal,
        })
      })
    }
  }

}
