import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ProductPricePipe } from "../../shared/pipes/product-price.pipe";
import { ScrollRoutingService } from '../../../services/scroll-routing.service';
import { NavigationRoutes } from '../../../const/navigation-routes';

@Component({
    selector: 'product-page',
    standalone: true,
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.scss',
    imports: [CommonModule, ProductPricePipe]
})
export class ProductPageComponent implements AfterViewInit {
  @ViewChild('productPage') productPage!: ElementRef;

  products = [
    {
      title: 'Stackable Chair',
      price: 97,
      img: '/assets/product-1.png'
    },
    {
      title: 'Lamp Tool',
      price: 45,
      img: '/assets/product-2.png'
    },
    {
      title: 'Dining Chair',
      price: 155,
      img: '/assets/product-3.png'
    },
    {
      title: 'Hand Base Lamp',
      price: 25,
      img: '/assets/product-4.png'
    },
    {
      title: 'Stylish Chair',
      price: 55,
      img: '/assets/product-5.png'
    },
    {
      title: 'Vintage Chair',
      price: 76,
      img: '/assets/product-6.png'
    }
  ];

  constructor(private _scrollService: ScrollRoutingService) {}

  ngAfterViewInit(): void {
    this._scrollService.registerElement(NavigationRoutes.PRODUCT, this.productPage);
  }

}
