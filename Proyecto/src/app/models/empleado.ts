export class Empleado{
    protected _dni: string
    protected _nombre: string
    protected _tlf: number
    protected _sueldo: number
    protected _departamento: string
    protected _tipoEmpleado: string
    
    constructor(dni: string, nombre: string, tlf:number, sueldo:number, departamento: string, tipoEmpleado: string){
        this._dni = dni
        this._nombre = nombre
        this._tlf = tlf
        this._sueldo = sueldo
        this._departamento = departamento
        this._tipoEmpleado = tipoEmpleado
    }

    get dni(){
        return this._dni
    }

    get nombre(){
        return this._nombre
    }

    get tlf(){
        return this._tlf
    }

    get departamento(){
        return this._departamento
    }

    get sueldo(){
        return this._sueldo
    }

    get tipoEmpleado(){
        return this._tipoEmpleado
    }

    sueldoFinal(): number{
        let sueldoFinal: number
        let sueldoBase = this.sueldo

        if(this._departamento == "Joyeria"){
            sueldoFinal = sueldoBase * 1.6;
        }else {
            sueldoFinal = sueldoBase * 1.4;
        }

        return Math.trunc(sueldoFinal)
    }
   
}

export class empleadoNormal extends Empleado {
    protected _horario: string
    protected _jornada: string

    constructor(horario: string, dni: string, nombre: string, tlf: number, sueldo: number, departamento: string, jornada: string, tipoEmpleado: string){
        super(dni, nombre, tlf, sueldo, departamento, tipoEmpleado)
        this._horario = horario
        this._jornada = jornada
    }

    get horario(){
        return this._horario
    }

    get jornada(){
        return this._jornada
    }

    override sueldoFinal(): number{
        let sueldoFinal: number = super.sueldoFinal()

        if(this._jornada == "Completa"){
            sueldoFinal = sueldoFinal * 1.2
        }else{
            sueldoFinal = sueldoFinal - 200
        }

        if(this._horario == "Noche"){
            sueldoFinal = sueldoFinal + 65
        }

        return Math.trunc(sueldoFinal)
    }
}

export class Manager extends Empleado {
    protected _estudios: string
    

    constructor(estudios:string, dni: string, nombre: string, tlf:number, sueldo:number, departamento: string, tipoEmpleado: string){
        super(dni, nombre, tlf, sueldo, departamento, tipoEmpleado)
        this._estudios = estudios
    }

    get estudios(){
        return this._estudios
    }

    override sueldoFinal(): number{
        let sueldoFinal: number = super.sueldoFinal()

        if(this._estudios == "Universidad"){
            sueldoFinal = sueldoFinal + 20
        }

        return Math.trunc(sueldoFinal)
    }

}

export type iEmpleadoNormal = {
    dni: string | null
    tipoEmpleado: string | null
    nombre: string | null
    tlf: number | null
    departamento: string | null
    horario: string | null
    jornada: string | null
    sueldo: number | null
}

export type iManager = {
    dni: string | null
    tipoEmpleado: string | null
    nombre: string | null
    tlf: number | null
    departamento: string | null
    estudios: string | null
    sueldo: number | null
}

export class Sueldo {
    public _dni: string;
    public _nombre: string;
    public _sueldo: number
  
    public constructor(
      dni: string,
      nombre: string,
      sueldo: number,
    ){
      this._dni = dni
      this._nombre = nombre
      this._sueldo = sueldo
    }
  }

export type iSueldo = {
    dni: string | null;
    nombre: string | null;
    sueldo: number | null;
}