import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FormClienteComponent } from './components/form-cliente/form-cliente.component';
import { TablaEmpleadosComponent } from './components/tabla-empleados/tabla-empleados.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { FormEmpleadoComponent } from './components/form-empleado/form-empleado.component';
import { ManagerComponent } from './components/manager/manager.component';
import { FormManagerComponent } from './components/form-manager/form-manager.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';
import { JoyaComponent } from './components/joya/joya.component';
import { FormJoyaComponent } from './components/form-joya/form-joya.component';
import { RopaComponent } from './components/ropa/ropa.component';
import { FormRopaComponent } from './components/form-ropa/form-ropa.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { FormPedidoComponent } from './components/form-pedido/form-pedido.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LoginComponent } from './components/login/login.component';
import { CEmpleadosComponent } from './components/charts/c-empleados/c-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FormClienteComponent,
    TablaEmpleadosComponent,
    EmpleadoComponent,
    FormEmpleadoComponent,
    ManagerComponent,
    FormManagerComponent,
    TablaProductosComponent,
    JoyaComponent,
    FormJoyaComponent,
    RopaComponent,
    FormRopaComponent,
    PedidoComponent,
    FormPedidoComponent,
    LoginComponent,
    CEmpleadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    ToastrModule.forRoot(),
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
