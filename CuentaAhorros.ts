import { Cuenta } from "./cuentaBancaria"
export class CuentaAhorros extends Cuenta {
    private cuentaActiva: boolean;

    constructor(saldoInicial: number, tasaAnual: number) {
        super(saldoInicial, tasaAnual);
        this.cuentaActiva = saldoInicial >= 10000;
    }

    consignar(cantidad: number): void {
        if (this.cuentaActiva) {
            super.consignar(cantidad);
        } else {
            console.log("La cuenta de ahorros está inactiva.");
        }
    }

    retirar(cantidad: number): void {
        if (this.cuentaActiva) {
            super.retirar(cantidad);
            if (this.numRetiros > 4) {
                this.comisionMensual += 1000;
            }
        } else {
            console.log("La cuenta de ahorros está inactiva.");
        }
    }

    extractoMensual(): void {
        if (this.saldo < 10000) {
            this.cuentaActiva = false;
        }
        super.extractoMensual();
        console.log("Cuenta activa: " + this.cuentaActiva);
    }

    imprimir(): void {
        super.imprimir();
        console.log("Cuenta activa: " + this.cuentaActiva);
    }
}