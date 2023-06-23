import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllProductsActions, GetAvailableProductsActions, GetSelectedProductsActions, SearchProductsActions } from 'src/app/@ngrx/products.actions';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent {
  constructor(private store:Store<any>){}
  /* Get All Products */
  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsActions({}))  
  }
  /* Get Selected Products */
  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsActions({}))  
  }
  onGetAvailableProducts() {
    this.store.dispatch(new GetAvailableProductsActions({}))  
  }
  onSearch(dataForm:any) {
    this.store.dispatch(new SearchProductsActions(dataForm.keyword))  
  }
  


}
