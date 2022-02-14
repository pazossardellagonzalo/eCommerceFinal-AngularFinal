import { Component, OnInit } from '@angular/core';
import { ApirestService } from "../../services/apirest.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iJoya, iRopa } from 'src/app/models/producto';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-ropa',
  templateUrl: './form-ropa.component.html',
  styleUrls: ['./form-ropa.component.css']
})
export class FormRopaComponent implements OnInit {
  formRopa: FormGroup;
  cBarra: string | null;

  constructor(
    public apirestService: ApirestService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    ) {
      this.formRopa = this.fb.group({
        cBarra: ['', Validators.required],
        tipoProducto: ['', Validators.required],
        marca: ['', Validators.required],
        descripcion: ['', Validators.required],
        talla: ['', Validators.required],
        color: ['', Validators.required],
        precio: ['', Validators.required],
      })
      this.cBarra = this.aRouter.snapshot.paramMap.get('cBarra');
    }

  ngOnInit(): void {
    this.putRopa();
  }

  addRopa(){
    const rop: iRopa = {
      cBarra: this.formRopa.get('cBarra')?.value,
      tipoProducto: this.formRopa.get('tipoProducto')?.value,
      marca: this.formRopa.get('marca')?.value,
      descripcion: this.formRopa.get('descripcion')?.value,
      talla: this.formRopa.get('talla')?.value,
      color: this.formRopa.get('color')?.value,
      precio: this.formRopa.get('precio')?.value,
    }

    if(this.cBarra !== null){
      this.apirestService.putRopa(this.cBarra, rop).subscribe()
        this.toastr.info('El empleado fue actualizado correctamente', 'Empleado actualizado');
    }else{
      this.apirestService.postRopa(rop).subscribe()
      this.toastr.success('El empleado fue creado correctamente', 'Empleado creado');
      this.formRopa.reset()
    }
    
  }

  putRopa() {
    if (this.cBarra !== null) {
      this.apirestService.getProducto(this.cBarra).subscribe(data => {
        this.formRopa.setValue({
          cBarra: data.cBarra,
          tipoProducto: data.tipoProducto,
          marca: data.marca,
          descripcion: data.descripcion,
          talla: data.talla,
          color: data.color,
          precio: data.precio,
        })
      })
    }
  }
}
