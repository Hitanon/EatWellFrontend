import { makeAutoObservable } from "mobx";

class AuthStore {
    user: { id?: string; name?: string; phone?: string; birthDate?: string } = {};
    isAuthenticated = false;

    constructor() {
        makeAutoObservable(this);
    }

    setUser(userData: { id: string; name: string; phone: string; birthDate: string }) {
        this.user = userData;
        this.isAuthenticated = true;
    }

    logout() {
        this.user = {};
        this.isAuthenticated = false;
    }
}

export default new AuthStore();
