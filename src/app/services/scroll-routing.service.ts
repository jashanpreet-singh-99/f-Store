import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollRoutingService {

  private elements: {[key:string]: ElementRef} = {};

  constructor() { }

  registerElement(key: string, element: ElementRef) {
    this.elements[key] = element;
  }

  scrollToElement(key: string): void {
    const element = this.elements[key]?.nativeElement;
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
