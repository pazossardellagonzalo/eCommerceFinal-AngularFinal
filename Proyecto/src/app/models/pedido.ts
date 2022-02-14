import { Producto } from "./producto"

export class Pedido{
    protected _dniCliente: string
    protected _nPedido: number
    protected _objetos: Array<Producto>
    protected _fecha: Date
    protected _importeTotal: number

    constructor(nPedido: number, objetos: Array<Producto>, fecha: Date, dniCliente: string, importeTotal: number){
        this._nPedido = nPedido
        this._dniCliente = dniCliente
        this._objetos = objetos
        this._fecha = fecha
        this._importeTotal = importeTotal
    }
    
    get nPedido(){
        return this._nPedido
    }
    
    get objetos(){
        return this._objetos
    }

    get fecha(){
        return this._fecha
    }

    get dniCliente(){
        return this._dniCliente
    }
    
    get importeTotal(){
        return this._importeTotal
    }
}

export type iPedido = {
    dniCliente: string | null
    nPedido: string | null
    objetos: Array<any> | null
    fecha: Date | null
    importeTotal: number | null
}