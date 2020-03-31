import { observable, decorate, action, runInAction, configure } from "mobx";
import { createContext } from "react";
import callAPI from "../api/agent";
//store
class NavBarStore {
  
  count = 1;
  products =[]; 
  product = null;
  plusCount = () => {
    runInAction(()=>{
      this.count += 1;
    })
  };

  fetchData = async () =>{
    try {
      const products = await callAPI('product');
      
      this.products = products.data;
      
    } catch (error) {
      throw error
    }
  }

  fetchDataProduct = async id =>{
    try {
      const product = await callAPI(`product/${id}`);
      this.product = product.data;
    } catch (error) {
      throw error
    }
  }
}

// định kiểu lại
// observable: property
// action: function
decorate(NavBarStore, {
  count: observable,
  products:observable,
  product:observable,
  plusCount: action,
  fetchData:action
});


export default createContext(new NavBarStore());
