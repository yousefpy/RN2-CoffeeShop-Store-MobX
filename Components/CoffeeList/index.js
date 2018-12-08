import React, { Component } from "react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import coffeeshops from "./list";

// Component
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  render() {
    let ListItems;
    if (coffeeshops) {
      ListItems = coffeeshops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Content>
        <List>{ListItems}</List>
      </Content>
    );
  }
}

export default CoffeeList;
