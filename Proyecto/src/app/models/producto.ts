export class Producto{
    protected _cBarra: string
    protected _marca: string
    protected _descripcion: string
    protected _precio: number
    protected _tipoProducto: string

    constructor(cBarra:string, tipoProducto:string, precio:number, marca:string, descripcion:string){
        this._cBarra = cBarra
        this._tipoProducto = tipoProducto
        this._precio = precio
        this._marca = marca
        this._descripcion = descripcion
    }

    get cBarra(){
        return this._cBarra
    }

    get tipoProducto(){
        return this._tipoProducto
    }

    get precio(){
        return this._precio
    }

    get marca(){
        return this._marca
    }

    get descripcion(){
        return this._descripcion
    }
    
    calcularPrecio(){
        if(this._marca == "Gucci"){
            this._precio + 20
        }
        if(this._marca == "Channel"){
            this._precio + 30
        }
        return this._precio
    }
}

export class Joyas extends Producto {
    protected _material: string
    protected _piedraPreciosa: string
    protected _peso: number

    constructor(cBarra:string, tipoProducto:string, precio:number, marca:string, descripcion:string, material:string, piedraPreciosa:string, peso:number){
        super(cBarra, tipoProducto, precio, marca, descripcion)
        this._material = material
        this._piedraPreciosa = piedraPreciosa
        this._peso = peso
    }

    get material(){
        return this._material
    }

    get piedraPreciosa(){
        return this._piedraPreciosa
    }

    get peso(){
        return this._peso
    }

    override calcularPrecio() {
        if(this._piedraPreciosa == "Ruby"){
            this._precio * 1.2
        }
        if(this._piedraPreciosa == "Zafiro"){
            this._precio * 1.3
        }
        if(this._piedraPreciosa == "Zafiro"){
            this._precio * 1.4
        }
        if(this._material == "Oro"){
            this._precio = this._peso * 42
        } else{
            this._precio = this._peso * 20
        }
        return this._precio
    }
}

export class Ropa extends Producto {
    protected _talla: number
    protected _color: string

    constructor(cBarra:string, tipoProducto:string, precio:number, marca:string, descripcion:string, talla:number, color:string){
        super(cBarra, tipoProducto, precio, marca, descripcion)
        this._talla = talla
        this._color = color
    }

    get talla(){
        return this._talla
    }

    get color(){
        return this._color
    }

    override calcularPrecio() {
        if(this._talla > 57){
            this._precio + 10
        }else{
            this._precio + 5
        }
        return this._precio
    }
}

export type iJoya = {
    cBarra: string | null
    tipoProducto: string | null
    marca: string | null
    descripcion: string | null
    material: string | null
    piedraPreciosa: string | null
    peso: number | null
    precio: number | null
}

export type iRopa = {
    cBarra: string | null
    tipoProducto: string | null
    marca: string | null
    descripcion: string | null
    talla: string | null
    color: string | null
    precio: number | null
}