import { Component, HostBinding, HostListener, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)' : 'onclick()'
  }
})
export class ControlComponent {
  //@HostBinding('class') className = 'control'
  // @HostListener()
  // onClick() {
  //   console.log('Clicked!')
  // }

  label = input.required<string>();

   onClick() {
    console.log('Clicked!')
  }
}
