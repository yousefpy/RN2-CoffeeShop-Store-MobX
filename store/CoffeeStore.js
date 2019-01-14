import { decorate, observable } from "mobx";
import axios from "axios";
class CoffeeStore {
  constructor() {
    this.coffeeshops = null;
    this.coffeeshop = null;
    this.loading = true;

    this.fetchAllCoffeeShops();
  }

  fetchAllCoffeeShops() {
    axios
      .get("http://coffee.q8fawazo.me/api/?format=json")
      .then(res => res.data)
      .then(coffeshops => {
        this.coffeeshops = coffeshops;
        this.loading = false;
      })
      .catch(err => console.error(err));
  }
}

decorate(CoffeeStore, {
  coffeeshops: observable,
  coffeeshop: observable,
  loading: observable
});
let coffeeStore = new CoffeeStore();
coffeeStore.fetchAllCoffeeShops();
export default coffeeStore;
