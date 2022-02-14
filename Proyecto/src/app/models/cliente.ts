export class Cliente {
    public _dni: string
    public _nombre: string
    public _primerApellido: string
    public _segundoApellido: string
    public _edad: number
    public _pais: string
    public _sexo: string
    public _tlf: number
    public _socio: boolean
    
    public constructor(dni: string, nombre: string, primerApellido: string, segundoApellido: string, edad:number,
         pais:string, sexo:string, tlf:number, socio:boolean){
        this._dni = dni
        this._nombre = nombre
        this._primerApellido = primerApellido
        this._segundoApellido = segundoApellido
        this._edad = edad
        this._pais = pais
        this._sexo = sexo
        this._tlf = tlf
        this._socio = socio
    }

    get dni(){
        return this._dni
    }

    get nombre(){
        return this._nombre
    }

    get primerApellido(){
        return this._primerApellido
    }

    get segundoApellido(){
        return this._segundoApellido
    }

    get edad(){
        return this._edad
    }

    get pais(){
        return this._pais
    }

    get sexo(){
        return this._sexo
    }

    get tlf(){
        return this._tlf
    }

    get socio(){
        return this._socio
    }
}

export type iCliente = {
    dni: string | null
    nombre: string | null
    primerApellido: string | null
    segundoApellido: string | null
    edad: number | null
    pais: string | null
    sexo: string | null
    tlf: number | null
    socio: boolean | null
}