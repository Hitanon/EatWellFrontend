import { makeAutoObservable } from "mobx";

class BalanceStore {
    frozenTickets = 2;
    goldenApples = 100;
    healthyDays = 1;

    constructor() {
        makeAutoObservable(this);
    }

    setBalance(balance: { frozenTickets: number; goldenApples: number; healthyDays: number }) {
        this.frozenTickets = balance.frozenTickets;
        this.goldenApples = balance.goldenApples;
        this.healthyDays = balance.healthyDays;
    }
}

export default new BalanceStore();
