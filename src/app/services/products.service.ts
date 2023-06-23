import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/products.model";

@Injectable({ providedIn:'root' })
export class ProductsService {
  
 
  
  
  constructor(private http: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products/");
  }

  Selected(product:Product): Observable<Product> {
    product.selected=!product.selected
    return this.http.put<Product>("http://localhost:3000/products/"+product.id,product);
  }

  Search(keyword: string):Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products?name_like="+keyword);

  }

  Delete(product: Product):Observable<void> {
    return this.http.delete<void>("http://localhost:3000/products/"+product.id);

  }

  saveProduct(product: Product):Observable<Product> {
    return this.http.post<Product>("http://localhost:3000/products/",product);
  }
  getProducts(id: number):Observable<Product> {
    return this.http.get<Product>("http://localhost:3000/products/"+id);
  }
  updatedProduct(product: Product) {
    return this.http.put<Product>("http://localhost:3000/products/"+product.id,product);
  }
  getSelectedProduct():Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products?selected=false");
  }

  getAvailableProduct():Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products?available=false");
  }

}
