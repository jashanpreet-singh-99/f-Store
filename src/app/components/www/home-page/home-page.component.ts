import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('start', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start <=> end', [
        animate('500ms ease-out')
      ])
    ]),
    trigger('fadeIn', [
      state('start', style({
        transform: 'scale(0.6)',
        opacity: 0
      })),
      state('end', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      transition('start <=> end', [
        animate('500ms ease-out')
      ])
    ]),
    trigger('expandHorizontal', [
      state('start', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      state('end', style({
        transform: 'translateX(0%)',
        opacity: 1
      })),
      transition('start <=> end', [
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit{

  animationStates: { [key: string]: string } = {
    Img: 'start',
    Container: 'start',
    Title: 'start',
    Text: 'start'
  };

  async ngOnInit() {
    await this.triggerAnimation('Img');
    await this.triggerAnimation('Container');
    await this.triggerAnimation('Title');
    await this.triggerAnimation('Text');
  }

  get animationStateImg() : string {
    return this.animationStates['Img'];
  }

  get animationStateContainer() : string {
    return this.animationStates['Container'];
  }

  get animationStateTitle() : string {
    return this.animationStates['Title'];
  }

  get animationStateText() : string {
    return this.animationStates['Text'];
  }

  private delay(ms: number = 500): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async triggerAnimation(object: string, state: string = 'end', time: number = 500) {
    await this.delay(time);
    this.animationStates[object] = state;
  }
}
