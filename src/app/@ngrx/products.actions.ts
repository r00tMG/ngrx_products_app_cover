import { Action } from "@ngrx/store"
import { Product } from "../models/products.model";

export enum ProductsActionsType{
    /* Get All Products */
    GET_ALL_PRODUCTS="[Products] Get All Products",
    GET_ALL_PRODUCTS_SUCCESS="[Products] Get All Products Succeess",
    GET_ALL_PRODUCTS_ERROR="[Products] Get All Products Error",
    /* Get Selected Products */
    GET_SELECTED_PRODUCTS="[Products] Get Selected Products",
    GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get Selected Products Succeess",
    GET_SELECTED_PRODUCTS_ERROR="[Products] Get Selected Products Error",
    /* Get Available Products */
    GET_AVAILABLE_PRODUCTS="[Products] Get Available Products",
    GET_AVAILABLE_PRODUCTS_SUCCESS="[Products] Get Available Products Succeess",
    GET_AVAILABLE_PRODUCTS_ERROR="[Products] Get Available Products Error",
    /* Get Search Products */
    SEARCH_PRODUCTS="[Products]  Search Products",
    SEARCH_PRODUCTS_SUCCESS="[Products]  Search Products Succeess",
    SEARCH_PRODUCTS_ERROR="[Products]  Search Products Error"
} 
/* Get All Products */
export class GetAllProductsActions implements Action{
    type:ProductsActionsType=ProductsActionsType.GET_ALL_PRODUCTS;
    constructor(public payload:any){}
}
export class GetAllProductsActionsSuccess implements Action{
    type:ProductsActionsType=ProductsActionsType.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload:Product[]){}
}
export class GetAllProductsActionsError implements Action{
    type:ProductsActionsType=ProductsActionsType.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload:string){}
}
/* Get Selected Products */
export class GetSelectedProductsActions implements Action{
    type:ProductsActionsType=ProductsActionsType.GET_SELECTED_PRODUCTS;
    constructor(public payload:any){}
}
export class GetSelectedProductsActionsSuccess implements Action{
    type:ProductsActionsType=ProductsActionsType.GET_SELECTED_PRODUCTS_SUCCESS;
    constructor(public payload:Product[]){}
}
export class GetSelectedProductsActionsError implements Action{
    type:ProductsActionsType=ProductsActionsType.GET_SELECTED_PRODUCTS_ERROR;
    constructor(public payload:string){}
}
/* Get Available Products */
export class GetAvailableProductsActions implements Action{
    type:ProductsActionsType=ProductsActionsType.GET_AVAILABLE_PRODUCTS;
    constructor(public payload:any){}
}
export class GetAvailableProductsActionsSuccess implements Action{
    type:ProductsActionsType=ProductsActionsType.GET_AVAILABLE_PRODUCTS_SUCCESS;
    constructor(public payload:Product[]){}
}
export class GetAvailableProductsActionsError implements Action{
    type:ProductsActionsType=ProductsActionsType.GET_AVAILABLE_PRODUCTS_ERROR;
    constructor(public payload:string){}
}
/*  Search Products Actions */
export class SearchProductsActions implements Action{
    type:ProductsActionsType=ProductsActionsType.SEARCH_PRODUCTS;
    constructor(public payload:any){}
}
export class SearchProductsActionsSuccess implements Action{
    type:ProductsActionsType=ProductsActionsType.SEARCH_PRODUCTS_SUCCESS;
    constructor(public payload:Product[]){}
}
export class SearchProductsActionsError implements Action{
    type:ProductsActionsType=ProductsActionsType.SEARCH_PRODUCTS_ERROR;
    constructor(public payload:string){}
}
export type ProductsActions=GetAllProductsActions|GetAllProductsActionsSuccess|GetAllProductsActionsError
|GetSelectedProductsActions|GetSelectedProductsActionsSuccess|GetSelectedProductsActionsError
|GetAvailableProductsActions|GetAvailableProductsActionsSuccess|GetAvailableProductsActionsError
|SearchProductsActions|SearchProductsActionsSuccess|SearchProductsActionsError;