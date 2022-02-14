import { Component, OnInit } from '@angular/core';
import { ApirestService } from "../../services/apirest.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iJoya } from 'src/app/models/producto';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-joya',
  templateUrl: './form-joya.component.html',
  styleUrls: ['./form-joya.component.css']
})
export class FormJoyaComponent implements OnInit {
  formJoya: FormGroup;
  cBarra: string | null;

  constructor(
    public apirestService: ApirestService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    ) {
      this.formJoya = this.fb.group({
        cBarra: ['', Validators.required],
        tipoProducto: ['', Validators.required],
        marca: ['', Validators.required],
        descripcion: ['', Validators.required],
        material: ['', Validators.required],
        piedraPreciosa: ['', Validators.required],
        peso: ['', Validators.required],
        precio: ['', Validators.required],
      })
      this.cBarra = this.aRouter.snapshot.paramMap.get('cBarra');
    }

  ngOnInit(): void {
    this.putJoya();
  }

  addJoya(){
    const joy: iJoya = {
      cBarra: this.formJoya.get('cBarra')?.value,
      tipoProducto: this.formJoya.get('tipoProducto')?.value,
      marca: this.formJoya.get('marca')?.value,
      descripcion: this.formJoya.get('descripcion')?.value,
      material: this.formJoya.get('material')?.value,
      piedraPreciosa: this.formJoya.get('piedraPreciosa')?.value,
      peso: this.formJoya.get('peso')?.value,
      precio: this.formJoya.get('precio')?.value,
    }

    if(this.cBarra !== null){
      this.apirestService.putJoya(this.cBarra, joy).subscribe()
        this.toastr.info('El empleado fue actualizado correctamente', 'Empleado actualizado');
    }else{
      this.apirestService.postJoya(joy).subscribe()
      this.toastr.success('El empleado fue creado correctamente', 'Empleado creado');
      this.formJoya.reset()
    }
    
  }

  putJoya() {
    if (this.cBarra !== null) {
      this.apirestService.getProducto(this.cBarra).subscribe(data => {
        this.formJoya.setValue({
          cBarra: data.cBarra,
          tipoProducto: data.tipoProducto,
          marca: data.marca,
          descripcion: data.descripcion,
          material: data.material,
          piedraPreciosa: data.piedraPreciosa,
          peso: data.peso,
          precio: data.precio,
        })
      })
    }
  }

}
