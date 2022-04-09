import { animate, state, style, transition, trigger } from "@angular/animations";
export const heightIfAnimation = trigger('heightIfAnimation', [
  // state('closed', style({
  //   height: 0,
  // })),
  // state('open', style({
  //   height: '*',
  // })),
  // transition('open => closed', [
  //   // animate('0.3s')
  //   style({ height: '*' }),
  //   animate('300ms ease-out', style({ height: '0' })),
  // ]),
  // transition('closed => open', [
  //   // animate('10s')
  //   style({ height: '0' }),
  //   animate('300ms ease-out', style({ height: '*' })),
  // ]),
  transition(':enter', [
    style({ height: '0' }),
    animate('300ms ease-out', style({ height: '*' })),
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({ height: '0' })),
  ]),
]);
