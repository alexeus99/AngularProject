import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';
import { delay, Observable, tap } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  
  title = 'my angular project';

  // products: IProduct[] = [];
  loading = false
  products$: Observable<IProduct[]>
  term = ''

  constructor(private ProductsService: ProductsService ) {

  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.ProductsService.getAll().pipe(
      tap( () => this.loading= false)
    )
    // this.ProductsService.getAll().subscribe( products => {
    //   this.products = products
    //   this.loading = false
    // })

  }

}
