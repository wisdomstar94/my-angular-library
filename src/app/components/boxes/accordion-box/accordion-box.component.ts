import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { heightIfAnimation } from 'src/app/animations/height-if.animation';

@Component({
  selector: 'app-accordion-box',
  templateUrl: './accordion-box.component.html',
  styleUrls: ['./accordion-box.component.scss'],
  animations: [
    heightIfAnimation,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionBoxComponent implements OnInit {
  @Output() onNgOnInit = new EventEmitter<AccordionBoxComponent>();
  @Input() isOpend: boolean;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.isOpend = false;
  }

  ngOnInit(): void {
    this.onNgOnInit.emit(this);
  }

  show(): void {
    this.isOpend = true;
    this.changeDetectorRef.detectChanges();
  }

  hide(): void {
    this.isOpend = false;
    this.changeDetectorRef.detectChanges();
  }

  toggle(): void {
    this.isOpend = !this.isOpend;
    this.changeDetectorRef.detectChanges();
  }
}
