import { makeAutoObservable } from "mobx";

class BalanceStore {
    frozenCoupons = 0;
    goldenApples = 0;
    healthyDays = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setBalance(balance: { frozenCoupons: number; goldenApples: number; healthyDays: number }) {
        this.frozenCoupons = balance.frozenCoupons;
        this.goldenApples = balance.goldenApples;
        this.healthyDays = balance.healthyDays;
    }
}

export default new BalanceStore();
