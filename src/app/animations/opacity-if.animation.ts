import { animate, state, style, transition, trigger } from "@angular/animations";
// export type opacityIfAnimationState = 'closed' | 'open';
export const opacityIfAnimation = trigger('opacityIfAnimation', [
  // state('closed', style({
  //   opacity: 0,
  // })),
  // state('open', style({
  //   opacity: 1,
  // })),
  // transition('open => closed', [
  //   animate('0.2s')
  // ]),
  // transition('closed => open', [
  //   animate('0.2s')
  // ]),
  transition(':enter', [
    style({ opacity: '0' }),
    animate('300ms ease-out', style({ opacity: '1' })),
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({ opacity: '0' })),
  ]),
]);
