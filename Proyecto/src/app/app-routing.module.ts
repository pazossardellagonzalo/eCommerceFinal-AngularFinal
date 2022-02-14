import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component'
import { FormClienteComponent } from './components/form-cliente/form-cliente.component'
import { TablaEmpleadosComponent } from './components/tabla-empleados/tabla-empleados.component'
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { FormEmpleadoComponent } from './components/form-empleado/form-empleado.component'
import { ManagerComponent } from './components/manager/manager.component';
import { FormManagerComponent } from './components/form-manager/form-manager.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';
import { JoyaComponent } from './components/joya/joya.component';
import { FormJoyaComponent } from './components/form-joya/form-joya.component';
import { RopaComponent } from './components/ropa/ropa.component';
import { FormRopaComponent } from './components/form-ropa/form-ropa.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { FormPedidoComponent } from './components/form-pedido/form-pedido.component';
import { LoginComponent } from './components/login/login.component';
import { CEmpleadosComponent } from './components/charts/c-empleados/c-empleados.component';

const routes: Routes = [
  { path: "", component: CEmpleadosComponent },
  { path: "Clientes", component: ClienteComponent },
  { path: "Clientes/formCliente", component: FormClienteComponent },
  { path: "Clientes/formCliente/:dni", component: FormClienteComponent },
  { path: "tablaEmpleados", component: TablaEmpleadosComponent },
  { path: "tablaEmpleados/Empleados", component: EmpleadoComponent },
  { path: "tablaEmpleados/Empleados/formEmpleado", component: FormEmpleadoComponent },
  { path: "tablaEmpleados/Empleados/formEmpleado/:dni", component: FormEmpleadoComponent },  
  { path: "tablaEmpleados/loginForm", component: LoginComponent },
  { path: "tablaEmpleados/loginForm/Managers", component: ManagerComponent },
  { path: "tablaEmpleados/loginForm/Managers/formManager", component: FormManagerComponent },
  { path: "tablaEmpleados/loginForm/Managers/formManager/:dni", component: FormManagerComponent },  
  { path: "tablaProductos", component: TablaProductosComponent },
  { path: "tablaProductos/Joyas", component: JoyaComponent },
  { path: "tablaProductos/Joyas/formJoya", component: FormJoyaComponent },
  { path: "tablaProductos/Joyas/formJoya/:cBarra", component: FormJoyaComponent },  
  { path: "tablaProductos/Ropas", component: RopaComponent },
  { path: "tablaProductos/Ropas/formRopa", component: FormRopaComponent },
  { path: "tablaProductos/Ropas/formRopa/:cBarra", component: FormRopaComponent },  
  { path: "Pedidos", component: PedidoComponent },
  { path: "Pedidos/formPedido", component: FormPedidoComponent },
  { path: "Pedidos/formPedido/:dniCliente", component: FormPedidoComponent },
  { path: "Estadisticas", component: CEmpleadosComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
