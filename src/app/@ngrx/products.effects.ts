import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { ProductsService } from "../services/products.service";
import { GetAllProductsActions, GetAllProductsActionsError, GetAllProductsActionsSuccess, GetAvailableProductsActionsError, GetAvailableProductsActionsSuccess, GetSelectedProductsActionsSuccess, ProductsActions, ProductsActionsType, SearchProductsActionsError, SearchProductsActionsSuccess } from "./products.actions";

@Injectable()
export class ProductsEffect{
    constructor(private productsService:ProductsService,
    private effectsAction:Actions){

    }
    /* Get All Products */
    getAllProductsEffect:Observable<ProductsActions>=createEffect(
        ()=>this.effectsAction.pipe(
            ofType(ProductsActionsType.GET_ALL_PRODUCTS),
            mergeMap(
                (action:ProductsActions)=>{
                  return this.productsService.getAllProduct()
                    .pipe(
                        map((products)=>new GetAllProductsActionsSuccess(products)),
                        catchError((err)=>of(new GetAllProductsActionsError(err.message)))
                    )
            })
        )
    )
    /* Get Selected Products */
    getSelectedProductsEffect:Observable<ProductsActions>=createEffect(
        ()=>this.effectsAction.pipe(
            ofType(ProductsActionsType.GET_SELECTED_PRODUCTS),
            mergeMap(
                (action:ProductsActions)=>{
                  return this.productsService.getSelectedProduct()
                    .pipe(
                        map((products)=>new GetSelectedProductsActionsSuccess(products)),
                        catchError((err)=>of(new GetAllProductsActionsError(err.message)))
                    )
            })
        )
    )
    /* Get Available Products */
    getAvailableProductsEffect:Observable<ProductsActions>=createEffect(
        ()=>this.effectsAction.pipe(
            ofType(ProductsActionsType.GET_AVAILABLE_PRODUCTS),
            mergeMap(
                (action:ProductsActions)=>{
                  return this.productsService.getAvailableProduct()
                    .pipe(
                        map((products)=>new GetAvailableProductsActionsSuccess(products)),
                        catchError((err)=>of(new GetAvailableProductsActionsError(err.message)))
                    )
            })
        )
    )
    /* Get Selected Products */
    getSearchProductsEffect:Observable<ProductsActions>=createEffect(
        ()=>this.effectsAction.pipe(
            ofType(ProductsActionsType.SEARCH_PRODUCTS),
            mergeMap(
                (action:ProductsActions)=>{
                  return this.productsService.Search(action.payload)
                    .pipe(
                        map((products)=>new SearchProductsActionsSuccess(products)),
                        catchError((err)=>of(new SearchProductsActionsError(err.message)))
                    )
            })
        )
    )





}
