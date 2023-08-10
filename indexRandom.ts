import { CuentaAhorros } from "./CuentaAhorros";
import { Cuenta } from "./cuentaBancaria"
import { CuentaCorriente } from "./CuentaCorriente";

let Cuentaksual = new Cuenta(30000, 2)
let cuentaAhorros = new CuentaAhorros(12000, 5);
let cuentaCorriente = new CuentaCorriente(8000, 3);
//cuenta normal
Cuentaksual.calcularInteresMensual()
Cuentaksual.consignar(10000)
Cuentaksual.retirar(2000)
Cuentaksual.retirar(1000)
Cuentaksual.extractoMensual()
Cuentaksual.imprimir()
//cuenta de ahorros :v valga la redundancia
cuentaAhorros.consignar(5000);
cuentaAhorros.retirar(3000);
cuentaAhorros.retirar(4000);
cuentaAhorros.extractoMensual();
cuentaAhorros.imprimir();
//pordos pero con uenta corriente
cuentaCorriente.consignar(2000);
cuentaCorriente.retirar(6000);
cuentaCorriente.retirar(10000);
cuentaCorriente.extractoMensual();
cuentaCorriente.imprimir();
//A