import { Component, Input } from '@angular/core';
import { ProductsState } from 'src/app/@ngrx/products.reducer';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
@Input() product:Product|null=null;
}
