export class Cuenta {
    protected saldo: number;
    protected numConsignaciones: number;
    protected numRetiros: number;
    protected tasaAnual: number;
    protected comisionMensual: number;

    constructor(saldoInicial: number, tasaAnual: number) {
        this.saldo = saldoInicial;
        this.numConsignaciones = 0;
        this.numRetiros = 0;
        this.tasaAnual = tasaAnual;
        this.comisionMensual = 0;
    }

    public setSaldo(saldoInicial:number){
        this.saldo=saldoInicial;
    }
    public setTasaAnual(tasaAnual){
        this.tasaAnual=tasaAnual;
    }
    public getSaldo
    consignar(cantidad: number): void {
        this.saldo += cantidad;
        this.numConsignaciones++;
    }

    retirar(cantidad: number): void {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
            this.numRetiros++;
        } else {
            console.log("No hay suficiente saldo para retirar esa cantidad.");
        }
    }

    calcularInteresMensual(): void {
        const interesMensual = (this.saldo * (this.tasaAnual / 100)) / 12;
        this.saldo += interesMensual;
    }

    extractoMensual(): void {
        this.saldo -= this.comisionMensual;
        this.calcularInteresMensual();
        console.log("Extracto mensual:");
        console.log("Saldo: " + this.saldo);
        console.log("Comisión mensual: " + this.comisionMensual);
        console.log("Número de transacciones realizadas: " + (this.numConsignaciones + this.numRetiros));
    }

    imprimir(): void {
        console.log("Saldo: " + this.saldo);
        console.log("Número de consignaciones: " + this.numConsignaciones);
        console.log("Número de retiros: " + this.numRetiros);
        console.log("Tasa anual: " + this.tasaAnual);
        console.log("Comisión mensual: " + this.comisionMensual);
    }
}


