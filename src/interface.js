"use strict";
class Conta {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
