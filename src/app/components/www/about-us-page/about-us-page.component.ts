import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollRoutingService } from '../../../services/scroll-routing.service';
import { NavigationRoutes } from '../../../const/navigation-routes';

@Component({
  selector: 'about-us-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss',
  animations: [
    trigger('fadeIn', [
      state('void', style({
          opacity: 0
      })),
      state('*', style({
          opacity: 1
      })),
      transition('void <=> *', [
          animate('500ms {{delay}}ms ease')
      ], {params: {delay: 0}})
    ]),
    trigger('slideInRight', [
      state('void', style({
          transform: 'translateX(100%)',
          opacity: 0
      })),
      state('*', style({
          transform: 'translateX(0)',
          opacity: 1
      })),
      transition('void <=> *', [
          animate('1000ms {{delay}}ms ease')
      ], {params: {delay: 0}})
    ])
  ]
})
export class AboutUsPageComponent implements OnInit, AfterViewInit {
  @ViewChild('aboutPage', { static: true }) aboutPage!: ElementRef;
  isInView: boolean = false;

  infoData = [
    {
      index: '1.',
      title: 'Who we are',
      detail: 'You get a 2-week free trail to kick the Smarter tries. We want you to.'
    },
    {
      index: '2.',
      title: 'What do we do',
      detail: 'We give you a free course that guides you through the process.'
    },
    {
      index: '3.',
      title: 'How do we help',
      detail: 'Use our multimedia lectures, videos, and coaching sessions.'
    },{
      index: '4.',
      title: 'Create success story',
      detail: 'With access to online learning resources anyone can transform.'
    }
  ];

  constructor(private _scrollService: ScrollRoutingService) {}

  ngAfterViewInit(): void {
    this._scrollService.registerElement(NavigationRoutes.ABOUT, this.aboutPage);
  }

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isInView = true;
          observer.unobserve(this.aboutPage.nativeElement);
        }
      });
    });

    observer.observe(this.aboutPage.nativeElement);
  }

}
