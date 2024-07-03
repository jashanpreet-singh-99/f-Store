import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'features-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss',
  animations: [
    trigger('fadeIn', [
      state('void', style({
          transform: 'translateY(100%)',
          opacity: 0
      })),
      state('*', style({
          transform: 'translateY(0%)',
          opacity: 1
      })),
      transition('void <=> *', [
          animate('500ms {{delay}}ms ease')
      ], {params: {delay: 0}})
    ])
  ]
})
export class FeaturesSectionComponent implements OnInit {

  features = [
    {
      icon: "payments",
      title: "15% cashback",
      detail: "Earn a 15% cashback reward on every furniture purchase you make!"
    },
    {
      icon: "event_repeat",
      title: "15 day terms",
      detail: "Take advantage of our 15-day payment terms, completely interest-free!"
    },
    {
      icon: "paid",
      title: "Save money",
      detail: "Discover unbeatable prices and save big money on top-quality furniture!"
    },
  ];
  
  @ViewChild('featureContainer', { static: true }) featureContainer!: ElementRef;
  isInView: boolean = false;

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isInView = true;
          observer.unobserve(this.featureContainer.nativeElement);
        }
      });
    });

    observer.observe(this.featureContainer.nativeElement);
  }
}
