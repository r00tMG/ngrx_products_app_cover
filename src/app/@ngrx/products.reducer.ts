import { Action } from "@ngrx/store";
import { Product } from "../models/products.model";
import { ProductsActions, ProductsActionsType } from "./products.actions";

export enum ProductsStateEnum{
    INITIAL="Initial",
    LOADING="Loading",
    LOADED="Loaded",
    ERROR="Error"
}

export interface ProductsState{
        products:Product[],
        errorMessage?:string,
        dataState:ProductsStateEnum
}

const initState:{
  products : [],
  errorMessage : "",
  dataState : ProductsStateEnum
} =
{
    products : [],
    errorMessage : "",
    dataState : ProductsStateEnum.INITIAL
}
// @ts-ignore
export function productsReducer(state:initState ,action:Action):ProductsState{
    switch (action.type) {
        /* Get All Products Reducer*/
        case ProductsActionsType.GET_ALL_PRODUCTS:
            return {...state,dataState:ProductsStateEnum.LOADING}
        case ProductsActionsType.GET_ALL_PRODUCTS_SUCCESS:
            return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductsActions>action).payload}
        case ProductsActionsType.GET_ALL_PRODUCTS_ERROR:
            return {...state,dataState:ProductsStateEnum.ERROR,products:(<ProductsActions>action).payload}
            /* Get Selected Products Reducer*/
        case ProductsActionsType.GET_SELECTED_PRODUCTS:
            return {...state,dataState:ProductsStateEnum.LOADING}
        case ProductsActionsType.GET_SELECTED_PRODUCTS_SUCCESS:
            return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductsActions>action).payload}
        case ProductsActionsType.GET_SELECTED_PRODUCTS_ERROR:
            return {...state,dataState:ProductsStateEnum.ERROR,products:(<ProductsActions>action).payload}
            /* Get Available Products Reducer*/
        case ProductsActionsType.GET_AVAILABLE_PRODUCTS:
            return {...state,dataState:ProductsStateEnum.LOADING}
        case ProductsActionsType.GET_AVAILABLE_PRODUCTS_SUCCESS:
            return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductsActions>action).payload}
        case ProductsActionsType.GET_AVAILABLE_PRODUCTS_ERROR:
            return {...state,dataState:ProductsStateEnum.ERROR,products:(<ProductsActions>action).payload}
            /*  Search Products Reducer*/
        case ProductsActionsType.SEARCH_PRODUCTS:
            return {...state,dataState:ProductsStateEnum.LOADING}
        case ProductsActionsType.SEARCH_PRODUCTS_SUCCESS:
            return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductsActions>action).payload}
        case ProductsActionsType.SEARCH_PRODUCTS_ERROR:
            return {...state,dataState:ProductsStateEnum.ERROR,products:(<ProductsActions>action).payload}


        default: return {...state}
            break;
    }
}
