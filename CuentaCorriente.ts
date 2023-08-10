import { Cuenta } from "./cuentaBancaria";
export class CuentaCorriente extends Cuenta {
    protected sobregiro: number;

    constructor(saldoInicial: number, tasaAnual: number) {
        super(saldoInicial, tasaAnual);
        this.sobregiro = 0;
    }

    retirar(cantidad: number): void {
        if (cantidad <= this.saldo + this.sobregiro) {
            if (cantidad <= this.saldo) {
                super.retirar(cantidad);
            } else {
                this.sobregiro -= (cantidad - this.saldo);
                this.saldo = 0;
            }
            this.numRetiros++;
        } else {
            console.log("No hay suficiente saldo y sobregiro para retirar esa cantidad.");
        }
    }

    consignar(cantidad: number): void {
        super.consignar(cantidad);
        if (this.sobregiro > 0) {
            this.sobregiro = Math.max(0, this.sobregiro - cantidad);
        }
    }

    extractoMensual(): void {
        super.extractoMensual();
        console.log("Valor de sobregiro: " + this.sobregiro);
    }

    imprimir(): void {
        super.imprimir();
        console.log("Valor de sobregiro: " + this.sobregiro);
    }
}