import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'review-page',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './review-page.component.html',
  styleUrl: './review-page.component.scss'
})
export class ReviewPageComponent {

  reviewData = [
    {
      author: 'David Miller',
      position: 'Real Estate Agent',
      review: 'F-Store transformed my living space with their beautiful and affordable furniture. The 15% cashback was a delightful bonus!',
      img: '/assets/user-1.jpg'
    },
    {
      author: 'Sarah Thompson',
      position: 'Interior Designer',
      review: 'Exceptional quality and service! The furniture is stunning, and the 15-day payment terms made it incredibly convenient.',
      img: '/assets/user-2.jpg'
    },
    {
      author: 'Michael Lee',
      position: 'Entrepreneur',
      review: 'The 15-day terms made it easy for us to furnish our new home without financial stress. Highly recommended!',
      img: '/assets/user-3.jpg'
    }
  ];

  customOptions: OwlOptions = {
    startPosition: 0,
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoWidth: true
  }

}
