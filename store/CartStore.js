import { decorate, observable } from "mobx";
class CartStore {
  constructor() {
    this.items = [
      {
        drink: "Latte",
        option: "Small",
        quantity: 2
      },
      {
        drink: "Espresso",
        option: "Large",
        quantity: 1
      }
    ];
  }
}

decorate(CartStore, {
  item: observable
});
let cartStore = new CartStore();
export default cartStore;
