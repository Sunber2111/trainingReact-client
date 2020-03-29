import { observable, decorate, action } from "mobx";
import { createContext } from "react";

//store
class NavBarStore {
  count = 1;

  plusCount = () => {
    this.count += 1;
  };
}

// định kiểu lại
// observable: property
// action: function
decorate(NavBarStore, {
  count: observable,
  plusCount: action
});

export default createContext(new NavBarStore());
