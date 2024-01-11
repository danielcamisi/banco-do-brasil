import { Component, OnInit } from '@angular/core';
import {ProductService} from  './productService/productService';


@Component({
  selector: 'appCarrouselSkeleton',
  templateUrl: './carrousel-skeleton.component.html',
  styleUrl: './carrousel-skeleton.component.css'
})
export class AppCarrouselSkeleton implements OnInit{
  products?: any;

  responsiveOptions?: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsSmall().then((products) => {
          this.products = products;
      });

     this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

  getSeverity(status: string):any {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
      }
  }
}
