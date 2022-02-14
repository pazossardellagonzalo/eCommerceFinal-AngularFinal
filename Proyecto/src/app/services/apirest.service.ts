import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente, iCliente } from "../models/cliente";
import { Empleado, iEmpleadoNormal, iManager } from "../models/empleado";
import { Producto, iJoya, iRopa } from "../models/producto";
import { Observable } from 'rxjs';
import { iPedido } from '../models/pedido';
import { iLogin } from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  URLAPI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    const url = `${this.URLAPI}/getClientes`;
    return this.http.get<Cliente[]>(url);
  }
  
  getEmpleados(): Observable<any> {
    const url = `${this.URLAPI}/getEmpleados`;
    return this.http.get(url);
  }

  getManagers(): Observable<any> {
    const url = `${this.URLAPI}/getManagers`;
    return this.http.get(url);
  }

  getJoyas(): Observable<any> {
    const url = `${this.URLAPI}/getJoyas`;
    return this.http.get(url);
  }

  getRopas(): Observable<any> {
    const url = `${this.URLAPI}/getRopas`;
    return this.http.get(url);
  }

  getPedidos(): Observable<any> {
    const url = `${this.URLAPI}/getPedidos`;
    return this.http.get(url);
  }

  getCliente(dni: string): Observable<any> {
    const url = `${this.URLAPI}/getCliente/${dni}`;
    return this.http.get(url);
  }

  getEmpleado(dni: string): Observable<any> {
    const url = `${this.URLAPI}/getEmpleado/${dni}`;
    return this.http.get(url);
  }

  getProducto(cBarra: string): Observable<any> {
    const url = `${this.URLAPI}/getProducto/${cBarra}`;
    return this.http.get(url);
  }

  getPedido(dniCliente: string): Observable<any> {
    const url = `${this.URLAPI}/getPedido/${dniCliente}`;
    return this.http.get(url);
  }

  postCliente(doc: any): Observable<any> {
    const url = `${this.URLAPI}/postCliente`;
    return this.http.post(url, doc);
  }

  postEmpleado(doc: any): Observable<any> {
    const url = `${this.URLAPI}/postEmpleado`;
    return this.http.post(url, doc);
  }

  postManager(doc: any): Observable<any> {
    const url = `${this.URLAPI}/postManager`;
    return this.http.post(url, doc);
  }

  postJoya(doc: any): Observable<any> {
    const url = `${this.URLAPI}/postJoya`;
    return this.http.post(url, doc);
  }

  postRopa(doc: any): Observable<any> {
    const url = `${this.URLAPI}/postRopa`;
    return this.http.post(url, doc);
  }

  postPedido(doc: any): Observable<any> {
    const url = `${this.URLAPI}/postPedido`;
    return this.http.post(url, doc);
  }

  putCliente(dni: string, cliente: iCliente): Observable<any> {
    const url = `${this.URLAPI}/putCliente/${dni}`;
    return this.http.put(url, cliente);
  }

  putEmpleado(dni: string, empleado: iEmpleadoNormal): Observable<any> {
    const url = `${this.URLAPI}/putEmpleado/${dni}`;
    return this.http.put(url, empleado);
  }

  putManager(dni: string, manager: iManager): Observable<any> {
    const url = `${this.URLAPI}/putManager/${dni}`;
    return this.http.put(url, manager);
  }

  putJoya(cBarra: string, joya: iJoya): Observable<any> {
    const url = `${this.URLAPI}/putJoya/${cBarra}`;
    return this.http.put(url, joya);
  }

  putRopa(cBarra: string, ropa: iRopa): Observable<any> {
    const url = `${this.URLAPI}/putRopa/${cBarra}`;
    return this.http.put(url, ropa);
  }

  putPedido(dniCliente: string, pedido: iPedido): Observable<any> {
    const url = `${this.URLAPI}/putPedido/${dniCliente}`;
    return this.http.put(url, pedido);
  }

  deleteCliente(dni: string): Observable<any>{
    const url = `${this.URLAPI}/delCliente/${dni}`;
    return this.http.delete(url);
  }

  deleteEmpleado(dni: string): Observable<any>{
    const url = `${this.URLAPI}/delEmpleado/${dni}`;
    return this.http.delete(url);
  }

  deleteProducto(cBarra: string): Observable<any>{
    const url = `${this.URLAPI}/delProducto/${cBarra}`;
    return this.http.delete(url);
  }

  deletePedido(dniCliente: string): Observable<any>{
    const url = `${this.URLAPI}/delPedido/${dniCliente}`;
    return this.http.delete(url);
  }

  getLogin(user: string, password: string): Observable<any> {
    const url = `${this.URLAPI}/getLogin/${user}/${password}`;
    return this.http.get(url);
  }
  
}
