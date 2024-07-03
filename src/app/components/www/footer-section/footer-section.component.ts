import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollRoutingService } from '../../../services/scroll-routing.service';
import { NavigationRoutes } from '../../../const/navigation-routes';

@Component({
  selector: 'footer-section',
  standalone: true,
  imports: [],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss'
})
export class FooterSectionComponent implements AfterViewInit {
  @ViewChild('contactPage', { static: true }) contactPage!: ElementRef;

  constructor(private _scrollService: ScrollRoutingService) {}

  ngAfterViewInit(): void {
    this._scrollService.registerElement(NavigationRoutes.CONTACT, this.contactPage);
  }

  scrollToHome() {
    this._scrollService.scrollToElement(NavigationRoutes.HOME);
  }
}
