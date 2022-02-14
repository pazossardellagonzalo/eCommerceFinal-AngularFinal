import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApirestService } from 'src/app/services/apirest.service';
import { Empleado, empleadoNormal, iManager, Manager } from 'src/app/models/empleado';
import { Sueldo, iSueldo } from 'src/app/models/empleado';

@Component({
  selector: 'app-c-empleados',
  templateUrl: './c-empleados.component.html',
  styleUrls: ['./c-empleados.component.css']
})
export class CEmpleadosComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: any = {
    chart:
    {
      backgroundColor: {
        linearGradient: [500, 500, 500, 500],
        stops: [
          [0, 'rgb(255, 255, 255)'],
        ]
      },
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: []
    },
    credits: {
      enabled: false
    },
    series: [{
      name: '',
      data: []
    }]
  };

  constructor(private apirestService: ApirestService) { }
  lEmpleado: empleadoNormal[] = []

  ngOnInit(): void {
    this.salarioEmpleado();
  }

  salarioEmpleado() {
    this.apirestService.getEmpleados().subscribe(
      (result: any) => {
        this.lEmpleado = result.map((empleado: any) => {
          return new empleadoNormal(empleado.horario, empleado.dni, empleado.nombre, empleado.tlf, empleado.sueldo, empleado.departamento, empleado.jornada, empleado.tipoEmpleado);
        });

        const dataSeries = this.lEmpleado.map((x: empleadoNormal) => x.dni);
        const dataCategorias = this.lEmpleado.map((x: empleadoNormal) => x.sueldo);
        if(dataSeries!=undefined && dataCategorias !=undefined && this.chartOptions.series!=undefined && this.chartOptions.xAxis!=undefined) {
          this.chartOptions.series[0]["data"] = dataCategorias;
          this.chartOptions.xAxis["categories"] = dataSeries;
          this.chartOptions.title["text"] = "Sueldos";
          this.chartOptions.series["name"] = "Personas"
        Highcharts.chart("miGrafico01", this.chartOptions);
        }
      },
      error => console.log(error)
    );
  }

}
